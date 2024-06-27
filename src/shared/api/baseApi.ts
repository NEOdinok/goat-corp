import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetProductsResponse } from "types";

import { TEST_TAG } from "./tags";

export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: [TEST_TAG],
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsResponse, void>({
      query: () => `getProducts`,
    }),
    postTestFunctionData: builder.mutation({
      query: (body) => ({
        url: "test",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery, usePostTestFunctionDataMutation } =
  baseApi;
