import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserCreate, UserEdit, UserList, UserShow } from "./components/users";
import { PostList, PostEdit, PostCreate, ShowPost } from "./components/posts";
import Dashboard from "./components/dashboard";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { authProvider } from "./authProvider";
import { themes } from "./themes/themes";

export const App = () => {
  const lightTheme = themes.find((theme) => theme.name === "soft")?.light;
  const darkTheme = themes.find((theme) => theme.name === "soft")?.dark;
  return (
    <Admin
      title="Dashboard"
      lightTheme={lightTheme}
      darkTheme={darkTheme}
      defaultTheme="light"
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}
    >
      <Resource
        name="users"
        icon={UserIcon}
        list={UserList}
        show={UserShow}
        edit={UserEdit}
        create={UserCreate}
      />
      <Resource
        name="posts"
        icon={PostIcon}
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        show={ShowPost}
      />
    </Admin>
  );
};
