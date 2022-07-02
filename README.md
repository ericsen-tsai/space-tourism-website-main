# Space Tourism Website

## Table of contents

- [Space Tourism Website](#space-tourism-website)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [Process](#process)
    - [Built with](#built-with)
    - [Note](#note)
      - [RTK (Redux Toolkit) Query](#rtk-redux-toolkit-query)
    - [Continued development](#continued-development)
  - [Author](#author)
  - [Acknowledgement](#acknowledgement)

## Overview

### Screenshot

![Preview](./design/preview.jpg)

### Links

- [Heroku](https://space-tourism-ericsen-tsai.herokuapp.com)

## Process

### Built with

- Frontend
  - Sass
  - React
  - RTK Query
  - Framer
  - Vite
- Backend
  - Express

### Note

#### RTK (Redux Toolkit) Query

> RTK Query reduces the bolierplate which need to be implement in the originalredux toolkit, which increase the speed of development dramatically.
> [RTK Query docs](https://redux-toolkit.js.org/rtk-query/usage/migrating-to-rtk-query) gives a mrigation guide to replace `createAsyncThunk` with `createApi` & `fetchBaseQuery`.

```js
/* app/services/api.js */
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
  baseUrl:
    process.env.NODE_ENV === "development" ? "http://localhost:3001/" : "/",
  prepareHeaders: (headers) => {
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

// create api templates for injection by other routes
export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  // provide tag types for identification
  tagTypes: ["Destination", "Crew", "Technology"],

  endpoints: () => ({}),
})

/* app/services/crew.js */

// inject endpoints
export const crewApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCrew: build.query({
      query: () => ({ url: "api/crew" }),
      // since rtk query recognize cached data by tags, 
      // providesTags are needed
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: "Crew", id })),
        // 'id: "LIST"' is abstract tag ID, which could be provided
        // when we want to give stronger control over invalidating the appropriate data
        // more details are in "Advanced Invalidation with abstract tag IDs" in rtk query docs
        { type: "Crew", id: "LIST" },
      ],
    }),
  }),
})

export const { useGetCrewQuery } = crewApi

```

### Continued development

- [ ] Migrate app to TypeScript

## Author

- GitHub - [Ericsen Tsai](https://github.com/ericsen-tsai)

## Acknowledgement

- 💡 [PedroTech](https://www.youtube.com/c/PedroTechnologies)
