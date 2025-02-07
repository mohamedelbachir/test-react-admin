import { useState } from "react";
import {
  BulkDeleteButton,
  Confirm,
  useListContext,
  useUnselectAll,
  useUpdate,
  useGetMany,
  useNotify,
  Button,
  useRefresh,
  useGetList,
  useDeleteMany,
} from "react-admin";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const BulkActionButton = () => {
  const { selectedIds } = useListContext();
  const [open, setOpen] = useState(false);
  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll("users");
  let postAuthors: any[] = [];
  const [deleteManyPosts] = useDeleteMany("posts", {
    ids: postAuthors,
  });

  const [deleteManyUsers, { isPending, error }] = useDeleteMany("users", {
    ids: selectedIds,
  });

  const { data: existingUsers, isLoading } = useGetMany("users", {
    ids: selectedIds,
  });

  const { data: posts, isLoading: loadingPosts } = useGetList("posts");

  const [update] = useUpdate();

  const handleClick = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  postAuthors =
    posts?.filter((p) => selectedIds.includes(p.authorId)).map((p) => p.id) ??
    [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDelete = async (e: any) => {
    e.preventDefault();
    if (!loadingPosts) {
      await Promise.all([
        await deleteManyPosts("posts", {
          ids: postAuthors,
        }),
        await deleteManyUsers(),
      ])
        .then((r) => {
          notify("Users with their post deleted successfully", {
            type: "success",
          });
          unselectAll();
          refresh();
        })
        .catch((e) => {
          notify("Error: Impossible to delete users", { type: "error" });
        });
    }
  };

  if (error) {
    notify("Error: Impossible to delete users", { type: "error" });
  }
  const handleConfirm = async () => {
    setOpen(false);

    if (isLoading || !existingUsers) {
      notify("Error: Unable to fetch existing users", { type: "error" });
      return;
    }

    try {
      await Promise.all(
        selectedIds.map(async (id) => {
          const user = existingUsers.find((u) => u.id === id);
          if (user) {
            await update("users", { id, data: { ...user, active: false } });
          }
        }),
      );

      notify("Users deactivated successfully", { type: "success" });
      unselectAll();
      refresh();
    } catch (error) {
      notify("Error: Users not updated", { type: "error" });
    }
  };

  return (
    <>
      <Box flex={1} alignItems={"center"} justifyItems={"end"} gap={10}>
        <Button
          color="warning"
          disabled={isPending}
          label="delete"
          onClick={handleDelete}
          startIcon={<DeleteIcon />}
        />
        <Button
          onClick={handleClick}
          color="secondary"
          disabled={isLoading}
          label="Deactivate"
        />
      </Box>

      <Confirm
        isOpen={open}
        loading={isLoading}
        title="Deactivate Selected Users"
        content={`Are you sure you want to deactivate ${selectedIds.length} users?`}
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </>
  );
};

export default BulkActionButton;
