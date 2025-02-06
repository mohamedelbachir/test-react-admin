import { Edit, SimpleForm, TextInput, BooleanInput } from "react-admin";

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" type="email" />
      <BooleanInput source="active" />
    </SimpleForm>
  </Edit>
);
