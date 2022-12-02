import { Grid } from "@mui/material";
import React from "react";

const AppContainer = ({ children }) => {
  return (
    <Grid
    container={true}
      sx={{
        backgroundColor: "primary.main",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onScroll={() => console.log(",pmp")}
    >
      {children}
    </Grid>
  );
};

export default AppContainer;
