import {
  Show,
  SimpleShowLayout,
  TextField,
  EmailField,
  BooleanField,
  WrapperField,
} from "react-admin";
import ActiveStatusField from "../statusChip";
export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <WrapperField label="status">
        <ActiveStatusField />
      </WrapperField>

      {/* <BooleanField source="active" /> */}
    </SimpleShowLayout>
  </Show>
);
