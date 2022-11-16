import { configureStore } from "@reduxjs/toolkit";
import { currentResultReducers } from "./currentResult";
import { searchStatesReducers } from "./searchStates";

const store = configureStore({
  reducer: {
    currentResult: currentResultReducers,
    searchStates: searchStatesReducers,
  },
});

export default store;
