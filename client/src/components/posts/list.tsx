import { useMediaQuery, Theme } from "@mui/material";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ReferenceField,
  EditButton,
  ShowButton,
  WrapperField,
  ReferenceInput,
  SelectInput,
  Filter,
  SimpleList,
} from "react-admin";
import InlineEditStatus from "../statusSwitch";
import { Box } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PostFilter = (props: any) => (
  <Filter {...props}>
    {/* Default filtering source for title doesn't work as expected since the endpoint filtering title in json-server is with _like */}
    {/* <TextInput label="Search Title" source="title_like" alwaysOn /> */}
    <SelectInput
      label="Status"
      source="status" // ✅ Ensure it matches the backend field
      choices={[
        { id: "Published", name: "Published" },
        { id: "Draft", name: "Draft" },
      ]}
    />
    <ReferenceInput label="Author" source="authorId" reference="users">
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const PostList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  return (
    <List filters={<PostFilter />}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={
            <>
              <span>Author : </span>
              <ReferenceField source="authorId" reference="users">
                <TextField source="name" />
              </ReferenceField>
            </>
          }
          tertiaryText={(record) => `Status: ${record.status}`}
          //rowStyle={() => ({ padding: "10px", borderBottom: "1px solid #ddd" })}
        />
      ) : (
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
          <WrapperField label="Actions">
            <Box>
              <EditButton label="" />
              <ShowButton label="" />
            </Box>
          </WrapperField>
        </Datagrid>
      )}
    </List>
  );
};
