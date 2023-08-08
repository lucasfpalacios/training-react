import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react"

type ThemeProp = {
  children: JSX.Element
}

enum themePalette {
  BG = "#12181b",
  LIME = "#C8FA5F",
  FONT_GLOBAL = "'JetBrains Mono', monospace",
  // Alert Style
  ERROR_MAIN = "#f344336",
  BG_ERROR_MAIN = "RGBA(244,67,54,0.1)",

}

  const theme = createTheme ({
    palette: {
      mode:"dark",
      background: {
        default: themePalette.BG,
      },
      primary: {
        main: themePalette.LIME,
      }
    },
    typography: {
      fontFamily: themePalette.FONT_GLOBAL,
    },
    components: {
      MuiButton: {
        defaultProps: {
          style: {
            textTransform: "none",
            boxShadow: "none",
            borderRadius: "0.5em"
          },
        },
      },
      MuiAlert: {
        defaultProps: {
          style: {
            borderRadius: "0.8em",
            fontSize: "13m",
          },
        },
        styleOverrides: {
          standardError: {
            border: `1px solid ${themePalette.ERROR_MAIN}`,
            background: themePalette.BG_ERROR_MAIN,
          },
        },
      },
    },
  });

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};