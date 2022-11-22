import { createSlice } from "@reduxjs/toolkit";

const searchStatesInitialState = {
  loading: true, 
  error: false,
};

const searchStatesSlice = createSlice({
  name: "searchStates",
  initialState: searchStatesInitialState,
  reducers: {
    stopLoading(state) {
      state = { ...state, loading: false };
      return state;
    },
    startLoading(state) {
      state = { ...state, loading: true };
      return state;
    },
    setError(state) {
      state = { ...state, error: true };
      return state;
    },
    clearError(state) {
      state = { ...state, error: false };
      return state;
    },
  },
});

export const searchStatesReducers = searchStatesSlice.reducer;
export const searchStatesActions = searchStatesSlice.actions;
