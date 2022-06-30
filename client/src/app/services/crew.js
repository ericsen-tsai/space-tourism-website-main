import { api } from "./api"

export const crewApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCrew: build.query({
      query: () => ({ url: "api/crew" }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: "Crew", id })),
        { type: "Crew", id: "LIST" },
      ],
    }),
  }),
})

export const { useGetCrewQuery } = crewApi
