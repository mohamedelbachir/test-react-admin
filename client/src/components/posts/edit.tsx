import {
  DateInput,
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
} from "react-admin";
export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <ReferenceInput source="authorId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput source="publishedDate" type="date" />
      <SelectInput
        source="status"
        choices={[
          { id: "Published", name: "Published" },
          { id: "Draft", name: "Draft" },
        ]}
      />
    </SimpleForm>
  </Edit>
);
