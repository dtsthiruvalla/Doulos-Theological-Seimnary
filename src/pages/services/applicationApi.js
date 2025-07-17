import { baseApi } from "./api";

// Application API Service
export const applicationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Submit new application
    submitApplication: builder.mutation({
      query: (applicationData) => {
        const formData = new FormData();

        // Add text fields
        Object.keys(applicationData).forEach((key) => {
          if (
            key !== "documents" &&
            applicationData[key] !== null &&
            applicationData[key] !== undefined
          ) {
            formData.append(key, applicationData[key]);
          }
        });

        // Add document files
        if (applicationData.documents && applicationData.documents.length > 0) {
          applicationData.documents.forEach((file, index) => {
            formData.append(`documents[]`, file);
          });
        }

        return {
          url: "/submit-application.php",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["Application"],
      // Optimistic update for better UX
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          console.error("Application submission failed:", error);
        }
      },
    }),

    // Get all applications (Admin only) with pagination
    getApplications: builder.query({
      query: (filters = {}) => {
        const params = new URLSearchParams();

        // Add filter parameters
        Object.keys(filters).forEach((key) => {
          if (
            filters[key] !== null &&
            filters[key] !== undefined &&
            filters[key] !== ""
          ) {
            params.append(key, filters[key]);
          }
        });

        // Add pagination parameters
        if (filters.page) params.append("page", filters.page);
        if (filters.limit) params.append("limit", filters.limit);

        return {
          url: `/get-applications.php${
            params.toString() ? `?${params.toString()}` : ""
          }`,
          method: "GET",
        };
      },
      providesTags: (result) =>
        result?.applications
          ? [
              ...result.applications.map(({ id }) => ({
                type: "Application",
                id,
              })),
              { type: "Application", id: "LIST" },
            ]
          : [{ type: "Application", id: "LIST" }],
      // Transform response for consistent data structure
      transformResponse: (response) => {
        return {
          applications: response.applications || [],
          total: response.total || 0,
          page: response.page || 1,
          limit: response.limit || 10,
          success: response.success || false,
        };
      },
      // Keep data for 2 minutes
      keepUnusedDataFor: 120,
    }),

    // Update application
    updateApplication: builder.mutation({
      query: ({ id, ...updateData }) => ({
        url: "/update-application.php",
        method: "PUT",
        body: JSON.stringify({ id, ...updateData }),
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Application", id },
        { type: "Application", id: "LIST" },
      ],
      // Optimistic update
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          applicationApi.util.updateQueryData(
            "getApplications",
            undefined,
            (draft) => {
              const application = draft.applications.find(
                (app) => app.id === id
              );
              if (application) {
                Object.assign(application, patch);
              }
            }
          )
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    // Update application status
    updateApplicationStatus: builder.mutation({
      query: ({ id, status, comments }) => ({
        url: "/update-application-status.php",
        method: "PUT",
        body: JSON.stringify({ id, status, comments }),
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Application", id },
        { type: "Application", id: "LIST" },
      ],
      // Optimistic update for status changes
      async onQueryStarted({ id, status }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          applicationApi.util.updateQueryData(
            "getApplications",
            undefined,
            (draft) => {
              const application = draft.applications.find(
                (app) => app.id === id
              );
              if (application) {
                application.status = status;
              }
            }
          )
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    // Delete application
    deleteApplication: builder.mutation({
      query: (id) => ({
        url: "/delete-application.php",
        method: "DELETE",
        body: JSON.stringify({ id }),
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Application", id },
        { type: "Application", id: "LIST" },
      ],
      // Optimistic delete
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          applicationApi.util.updateQueryData(
            "getApplications",
            undefined,
            (draft) => {
              const index = draft.applications.findIndex(
                (app) => app.id === id
              );
              if (index !== -1) {
                draft.applications.splice(index, 1);
                draft.total -= 1;
              }
            }
          )
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    // Get courses (cached for longer period)
    getCourses: builder.query({
      query: () => ({
        url: "/get-courses.php",
        method: "GET",
      }),
      providesTags: ["Course"],
      // Keep courses data for 10 minutes (rarely changes)
      keepUnusedDataFor: 600,
      // Transform response
      transformResponse: (response) => {
        return {
          courses: response.courses || [],
          success: response.success || false,
        };
      },
    }),

    // Admin login
    adminLogin: builder.mutation({
      query: (credentials) => ({
        url: "/admin-login.php",
        method: "POST",
        body: JSON.stringify(credentials),
      }),
      invalidatesTags: ["Admin"],
      // Handle login response
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.success && data.token) {
            localStorage.setItem("adminToken", data.token);
          }
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useSubmitApplicationMutation,
  useGetApplicationsQuery,
  useUpdateApplicationMutation,
  useUpdateApplicationStatusMutation,
  useDeleteApplicationMutation,
  useGetCoursesQuery,
  useAdminLoginMutation,
} = applicationApi;

export default applicationApi;
