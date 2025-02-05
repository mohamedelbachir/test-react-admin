import { useState } from "react";
import {
  BulkDeleteButton,
  Confirm,
  useListContext,
  useUnselectAll,
  useUpdateMany,
  useNotify,
  useRefresh,
} from "react-admin";
import { Button, Box } from "@mui/material";

const BulkActionButton = () => {
  const { selectedIds } = useListContext();
  const [open, setOpen] = useState(false);
  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll("users");

  const [updateMany, { isPending }] = useUpdateMany(
    "users",
    { ids: selectedIds, data: { active: false } },
    {
      onSuccess: () => {
        notify("Users updated");
        unselectAll();
      },
      onError: () => {
        notify("Error: posts not updated", { type: "error" });
        refresh();
      },
    },
  );
  const handleClick = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const handleConfirm = () => {
    updateMany();
    setOpen(false);
  };

  return (
    <>
      <Box flex={1} alignItems={"center"} justifyItems={"end"} gap={2}>
        <BulkDeleteButton />
        <Button onClick={handleClick} color="secondary" disabled={isPending}>
          Deactivate
        </Button>
      </Box>

      <Confirm
        isOpen={open}
        loading={isPending}
        title=" Deactivate Selected Users"
        content={`Are you sure you want to deactivate ${selectedIds.length} users?`}
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </>
  );
};

export default BulkActionButton;
