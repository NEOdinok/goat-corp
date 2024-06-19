import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Test } from "./types";

interface TestState {
  items: Array<Test>;
  isSidebarOpen: boolean;
}

const initialState: TestState = {
  items: [],
  isSidebarOpen: false,
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    testReducer: (state, action: PayloadAction<Test>) => {
      console.log("state:", state, "action:", action);
    },
    openSidebar(state) {
      state.isSidebarOpen = true;
    },
    closeSidebar(state) {
      state.isSidebarOpen = false;
    },
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { openSidebar, closeSidebar, toggleSidebar } = testSlice.actions;
