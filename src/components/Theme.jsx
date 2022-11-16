import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

const Theme = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#202124",
      },
      secondary: {
        main: "#407762",
      },
      delete: {
        main: "#cd3e35",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
