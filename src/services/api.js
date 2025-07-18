import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// API Configuration - Use different path to avoid conflicts with Vercel
const API_BASE_URL = "https://api.dtsthiruvalla.com";

// Create the base API service
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
      // Add authentication token if available
      const token = localStorage.getItem("adminToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      // Only set content-type for non-FormData requests
      // FormData requests should not have content-type set manually
      if (endpoint !== "submitApplication") {
        headers.set("content-type", "application/json");
      }

      return headers;
    },
  }),
  tagTypes: ["Application", "Course", "Admin"],
  // Cache management configuration
  keepUnusedDataFor: 60, // Keep unused data for 60 seconds
  refetchOnFocus: true, // Refetch when window regains focus
  refetchOnReconnect: true, // Refetch when network connection is restored
  refetchOnMountOrArgChange: 30, // Refetch if data is older than 30 seconds
  endpoints: () => ({}),
});

export default baseApi;
