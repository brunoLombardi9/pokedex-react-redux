import { createSlice } from "@reduxjs/toolkit";

const currentResultInitialState = [];

const currentResultSlice = createSlice({
  name: "currentResaultSlice",
  initialState: currentResultInitialState,
  reducers: {
    retainResult(state, action) {
      state = [...action.payload];
      state.sort((a, b) => a.id - b.id);
      return state;
    },
  },
});

export const currentResultReducers = currentResultSlice.reducer;
export const currentResultActions = currentResultSlice.actions;
