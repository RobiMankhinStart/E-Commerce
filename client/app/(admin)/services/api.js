import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApiService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  // tagTypes: ["Products"], // Used for automatic data refreshing
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "/product/allproducts",
      // providesTags: ["Products"], // Telling RTK Query this is a list of products
    }),
    getCategories: build.query({
      query: () => "/category/all",
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = adminApiService;
