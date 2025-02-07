import {
  List,
  Datagrid,
  TextField,
  EditButton,
  EmailField,
  SimpleList,
  WrapperField,
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";
import BulkActionButton from "./bulkaction";
import ActiveStatusField from "../statusChip";
export const UserList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.email}
          tertiaryText={(record) =>
            `status: ${record.active ? "active" : "desactivated"}`
          }
          // rowStyle={() => ({ padding: "10px", borderBottom: "1px solid #ddd" })}
        />
      ) : (
        <Datagrid bulkActionButtons={<BulkActionButton />}>
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <WrapperField label="status">
            <ActiveStatusField />
          </WrapperField>
          <WrapperField label="action">
            <>
              <EditButton />
            </>
          </WrapperField>
        </Datagrid>
      )}
    </List>
  );
};
