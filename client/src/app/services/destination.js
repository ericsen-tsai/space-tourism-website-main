import { api } from "./api"

export const destinationApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDestinations: build.query({
      query: () => ({ url: "api/destination" }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: "Destination", id })),
        { type: "Destination", id: "LIST" },
      ],
    }),
  }),
})

export const { useGetDestinationsQuery } = destinationApi
