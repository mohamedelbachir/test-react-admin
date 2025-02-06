import { Create, SimpleForm, TextInput, BooleanInput } from "react-admin";

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" required />
      <TextInput source="email" type="email" required />
      <BooleanInput source="active" />
    </SimpleForm>
  </Create>
);
