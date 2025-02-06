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
} from "react-admin";
import { Box } from "@mui/material";

const BulkActionButton = () => {
  const { selectedIds } = useListContext();
  const [open, setOpen] = useState(false);
  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll("users");

  const { data: existingUsers, isLoading } = useGetMany("users", {
    ids: selectedIds,
  });
  const [update] = useUpdate();

  const handleClick = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

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
      <Box flex={1} alignItems={"center"} justifyItems={"end"} gap={5}>
        <BulkDeleteButton />
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
