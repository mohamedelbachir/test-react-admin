import { Admin, Resource, ShowGuesser } from "react-admin";
import { Layout } from "./Layout";
import { UserList } from "./components/users";
import { PostList, PostEdit, PostCreate } from "./components/posts";
import Dashboard from "./components/dashboard";
//import { dataProvider } from "./dataProvider";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { authProvider } from "./authProvider";
import { themes, ThemeName } from "./themes/themes";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("http://localhost:3000");

export const App = () => {
  //const [themeName] = useStore<ThemeName>('themeName', 'soft');
  const lightTheme = themes.find((theme) => theme.name === "soft")?.light;
  const darkTheme = themes.find((theme) => theme.name === "soft")?.dark;
  return (
    <Admin
      lightTheme={lightTheme}
      darkTheme={darkTheme}
      defaultTheme="light"
      authProvider={authProvider}
      layout={Layout}
      dataProvider={dataProvider}
      dashboard={Dashboard}
      title={"Dashboard"}
    >
      <Resource
        name="users"
        icon={UserIcon}
        list={UserList}
        show={ShowGuesser}
        //link={"show"}
        //reference="users"
      />
      <Resource
        name="posts"
        icon={PostIcon}
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
    </Admin>
  );
};
