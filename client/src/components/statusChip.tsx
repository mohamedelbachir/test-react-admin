import { useRecordContext } from "react-admin";
import { Chip } from "@mui/material";
const ActiveStatusField = () => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    <Chip
      label={record.active ? "Active" : "Deactivated"}
      sx={{
        backgroundColor: record.active ? "#4CAF50" : "#F44336",
        color: "#fff",
      }}
    />
  );
};

export default ActiveStatusField;
