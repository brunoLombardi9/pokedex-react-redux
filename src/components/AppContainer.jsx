import { Box } from "@mui/material";
import React from "react";

const AppContainer = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default AppContainer;
