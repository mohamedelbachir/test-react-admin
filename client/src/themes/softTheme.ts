import { defaultTheme, RaThemeOptions } from "react-admin";

/**
 * Soft: A gentle theme for apps with rich content (images, charts, maps, etc).
 *
 * Uses white app bar, rounder corners, light colors.
 */

export const softDarkTheme: RaThemeOptions = {
  palette: {
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#FBBA72",
    },
    mode: "dark" as const, // Switching the dark mode on is a single property value change.
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontSize: "2rem", fontWeight: 700 },
    h2: { fontSize: "1.75rem", fontWeight: 600 },
    h3: { fontSize: "1.5rem", fontWeight: 600 },
    h4: { fontSize: "1.25rem", fontWeight: 500 },
    h5: { fontSize: "1.1rem", fontWeight: 500 },
    h6: { fontSize: "1rem", fontWeight: 500 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontSize: "0.875rem", lineHeight: 1.5 },
  },
  components: {
    ...defaultTheme.components,
    RaListMain: {
      styleOverrides: {
        marginTop: "20px",
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderLeft: "3px solid #000",
          "&.RaMenuItemLink-active": {
            borderLeft: "3px solid #90caf9",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: undefined,
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: "#ffffffb3",
          backgroundColor: "#616161",
        },
      },
      defaultProps: {
        elevation: 1,
      },
    },
  },
};

export const softLightTheme: RaThemeOptions = {
  palette: {
    primary: {
      main: "#4f3cc9",
    },
    secondary: {
      light: "#5f5fc4",
      main: "#283593",
      dark: "#001064",
      contrastText: "#fff",
    },
    background: {
      default: "#fcfcfe",
    },
    mode: "light" as const,
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontSize: "2rem", fontWeight: 700 },
    h2: { fontSize: "1.75rem", fontWeight: 600 },
    h3: { fontSize: "1.5rem", fontWeight: 600 },
    h4: { fontSize: "1.25rem", fontWeight: 500 },
    h5: { fontSize: "1.1rem", fontWeight: 500 },
    h6: { fontSize: "1rem", fontWeight: 500 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontSize: "0.875rem", lineHeight: 1.5 },
  },
  components: {
    ...defaultTheme.components,
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderLeft: "3px solid #fff",
          "&.RaMenuItemLink-active": {
            borderLeft: "3px solid #4f3cc9",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: "none",
        },
        root: {
          border: "1px solid #e0e0e3",
          backgroundClip: "padding-box",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: "#808080",
          backgroundColor: "#fff",
        },
      },
      defaultProps: {
        elevation: 1,
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#f5f5f5",
        },
        barColorPrimary: {
          backgroundColor: "#d7d7d7",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:last-child td": { border: 0 },
        },
      },
    },
  },
};
