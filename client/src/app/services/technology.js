import { api } from "./api"

export const technologyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTechnology: build.query({
      query: () => ({ url: "api/technology" }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: "Technology", id })),
        { type: "Technology", id: "LIST" },
      ],
    }),
  }),
})

export const { useGetTechnologyQuery } = technologyApi
