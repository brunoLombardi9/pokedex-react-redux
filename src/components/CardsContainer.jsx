import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Results from "./Results";

const CardsContainer = () => {
  const loading = useSelector((state) => state.searchStates.loading);
  const error = useSelector((state) => state.searchStates.error);
  const currentResult = useSelector((state) => state.currentResult);

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

      {(loading === false && currentResult.length > 0) && <Results currentResult={currentResult}/> }
      {loading && <CircularProgress/>}
      {error && <Typography>Error</Typography> }
    </Box>

  );
};

export default CardsContainer;
