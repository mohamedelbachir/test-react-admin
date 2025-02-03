import {
  Admin,
  Resource,
  EditGuesser,
  ListGuesser,
  ShowGuesser,
  radiantLightTheme, radiantDarkTheme
} from "react-admin";
import { Layout } from "./Layout";
import { UserList } from "./users";
import {PostList,PostEdit,PostCreate} from "./posts"
import {Dashboard} from "./dashboard"
import { dataProvider } from "./dataProvider";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { authProvider } from './authProvider';
export const App = () => (
  <Admin theme={radiantLightTheme} darkTheme={radiantDarkTheme} authProvider={authProvider} layout={Layout} dataProvider={dataProvider}  dashboard={Dashboard}>
    <Resource name="users" icon={UserIcon} list={UserList} show={ShowGuesser} link={"show"} reference="users" />
    <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate}/>
  </Admin>
);
