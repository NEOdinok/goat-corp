import { baseApi, TEST_TAG } from "@/shared/api";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    test: build.query<void, void>({
      query: () => ({
        url: `test`,
      }),
      providesTags: [TEST_TAG],
    }),
  }),
});
