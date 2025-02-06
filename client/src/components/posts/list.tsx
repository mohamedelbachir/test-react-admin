import {
  List,
  Datagrid,
  TextField,
  DateField,
  ReferenceField,
  EditButton,
  Filter,
  TextInput,
  SelectInput,
  ShowButton,
  WrapperField,
} from "react-admin";
import InlineEditStatus from "../statusSwitch";
import { Box } from "@mui/material";
const PostFilter = () => (
  <Filter>
    <TextInput label="Search by Title" source="title" alwaysOn />
    <SelectInput
      label="Status"
      source="published"
      choices={[
        { id: true, name: "Published" },
        { id: false, name: "Draft" },
      ]}
    />
  </Filter>
);
export const PostList = () => (
  <List filter={PostFilter}>
    <Datagrid rowClick={false}>
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="authorId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="publishedDate" />
      <WrapperField label="Status">
        <InlineEditStatus />
      </WrapperField>
      <WrapperField label="Action">
        <Box>
          <EditButton />
          <ShowButton />
        </Box>
      </WrapperField>
    </Datagrid>
  </List>
);
