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
      <TextInput source="title" required />
      <ReferenceInput source="authorId" reference="users">
        <SelectInput optionText="name" required />
      </ReferenceInput>
      <DateInput source="publishedDate" type="date" required />
      <SelectInput
        source="status"
        choices={[
          { id: "Published", name: "Published" },
          { id: "Draft", name: "Draft" },
        ]}
        required
      />
    </SimpleForm>
  </Edit>
);
