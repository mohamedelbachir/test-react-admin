import {
  List,
  Datagrid,
  TextField,
  EditButton,
  EmailField,
  ShowButton,
} from "react-admin";
import BulkActionButton from "./bulkaction";
import ActiveStatusField from "../statusChip";
export const UserList = () => (
  <List>
    <Datagrid bulkActionButtons={<BulkActionButton />}>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <ActiveStatusField />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);
