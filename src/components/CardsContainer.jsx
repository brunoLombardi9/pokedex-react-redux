import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Results, ErrorPage } from "./";

const CardsContainer = () => {
  const loading = useSelector((state) => state.searchStates.loading);
  const error = useSelector((state) => state.searchStates.error);
  const currentResult = useSelector((state) => state.currentResult);

  return (
    <>
      {(loading === false && currentResult.length > 0) && <Results currentResult={currentResult}/> }
      {loading && <CircularProgress/>}
      {error &&  <ErrorPage/>}
    </>
  );
};

export default CardsContainer;
