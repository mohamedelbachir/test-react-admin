import {
  DateInput,
  SimpleForm,
  ReferenceInput,
  Create,
  TextInput,
  SelectInput,
} from "react-admin";

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" required />
      <ReferenceInput source="authorId" reference="users">
        <SelectInput optionText="name" />
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
  </Create>
);
