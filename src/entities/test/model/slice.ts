import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Test } from "./types";

const initialState = {
  items: [],
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    testReducer: (state, action: PayloadAction<Test>) => {
      console.log("state:", state, "action:", action);
    },
  },
});

export const { testReducer } = testSlice.actions;
