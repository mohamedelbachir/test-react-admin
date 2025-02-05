import { ReactNode, useState } from "react";
import { useRecordContext, useUpdate } from "react-admin";
import {
  MenuItem,
  Select,
  CircularProgress,
  SelectChangeEvent,
} from "@mui/material";

const InlineEditStatus = () => {
  const record = useRecordContext();
  const [update] = useUpdate();
  const [status, setStatus] = useState(record?.status || "Draft");
  const [loading, setLoading] = useState(false);

  if (!record) return null;

  const handleChange = async (
    event: SelectChangeEvent<any>,
    child: ReactNode,
  ) => {
    const newStatus = event.target.value as string;
    setStatus(newStatus);
    setLoading(true);

    try {
      await update("posts", {
        id: record.id,
        data: { ...record, status: newStatus },
      });
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <CircularProgress size={20} />
  ) : (
    <Select
      value={status}
      onChange={handleChange}
      size="small"
      sx={{ minWidth: 120 }}
    >
      <MenuItem value="Published">Published</MenuItem>
      <MenuItem value="Draft">Draft</MenuItem>
    </Select>
  );
};

export default InlineEditStatus;
