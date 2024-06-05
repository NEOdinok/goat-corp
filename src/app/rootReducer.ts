import { testSlice } from "@/entities/test";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [testSlice.name]: testSlice.reducer,
});
