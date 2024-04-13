import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { TEST_TAG } from "./tags";

export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: [TEST_TAG],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: () => ({}),
});
