import { Box } from "@mui/material";
import React from "react";

const BottomContainer = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "0.5rem",
        minWidth: "60%",
        minHeight: "40vh",
        padding: "2rem",
        margin: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      {children}
    </Box>
  );
};

export default BottomContainer;
