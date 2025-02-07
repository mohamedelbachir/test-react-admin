import { Edit, SimpleForm, TextInput, BooleanInput } from "react-admin";

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" required />
      <TextInput source="email" type="email" required />
      <BooleanInput source="active" />
    </SimpleForm>
  </Edit>
);
