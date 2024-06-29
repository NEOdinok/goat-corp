import { combineReducers } from "@reduxjs/toolkit";

import { testSlice } from "@/entities/test";

import { baseApi } from "@/shared/api";

export const rootReducer = combineReducers({
  [testSlice.name]: testSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
