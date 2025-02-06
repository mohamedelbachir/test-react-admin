import {
  RaThemeOptions,
  defaultLightTheme,
  defaultDarkTheme,
} from "react-admin";

import { softDarkTheme, softLightTheme } from "./softTheme";

export type ThemeName = "soft" | "default";

export interface Theme {
  name: ThemeName;
  light: RaThemeOptions;
  dark?: RaThemeOptions;
}

export const themes: Theme[] = [
  { name: "soft", light: softLightTheme, dark: softDarkTheme },
  { name: "default", light: defaultLightTheme, dark: defaultDarkTheme },
];
