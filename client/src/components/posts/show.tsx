import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";

export const ShowPost = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="authorId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="publishedDate" />
      <TextField source="status" />
    </SimpleShowLayout>
  </Show>
);
