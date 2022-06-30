import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
  baseUrl:
    process.env.NODE_ENV === "development" ? "http://localhost:3001/" : "/",
  prepareHeaders: (headers) => {
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Destination", "Crew", "Technology"],

  endpoints: () => ({}),
})
