import { Box } from "@mui/material";
import React from "react";

const BottomContainer = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "0.5rem",
        minWidth: "60%",
        maxWidth: "100%",
        minHeight: "40vh",
        padding: "1rem",
        margin: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default BottomContainer;
