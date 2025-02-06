import {
  List,
  Datagrid,
  TextField,
  EditButton,
  EmailField,
  ShowButton,
  WrapperField,
} from "react-admin";
import BulkActionButton from "./bulkaction";
import ActiveStatusField from "../statusChip";
export const UserList = () => (
  <List>
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
          <ShowButton />
        </>
      </WrapperField>
    </Datagrid>
  </List>
);
