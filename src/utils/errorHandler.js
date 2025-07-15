import { isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Centralized error handling middleware
export const rtkQueryErrorMiddleware = (api) => (next) => (action) => {
  // RTK Query uses `isRejectedWithValue` to check for errors
  if (isRejectedWithValue(action)) {
    console.error("RTK Query Error:", action.error);

    // Handle different error types
    if (action.payload?.status === 401) {
      // Handle authentication errors
      localStorage.removeItem("adminToken");
      window.location.href = "/admin/login";
    } else if (action.payload?.status === 403) {
      // Handle authorization errors
      toast.error("You do not have permission to perform this action");
    } else if (action.payload?.status === 404) {
      // Handle not found errors
      toast.error("Resource not found");
    } else if (action.payload?.status === 500) {
      // Handle server errors
      toast.error("Internal server error. Please try again later.");
    } else if (action.payload?.status === "FETCH_ERROR") {
      // Handle network errors
      toast.error("Network error. Please check your connection.");
    } else {
      // Handle other errors
      const errorMessage =
        action.payload?.data?.message ||
        action.payload?.error ||
        "An unexpected error occurred";
      toast.error(errorMessage);
    }
  }

  return next(action);
};

// Error transformer for consistent error handling
export const errorTransformer = (error) => {
  if (error.status === "FETCH_ERROR") {
    return {
      status: error.status,
      data: {
        message: "Network error. Please check your internet connection.",
        code: "NETWORK_ERROR",
      },
    };
  }

  if (error.status === "TIMEOUT_ERROR") {
    return {
      status: error.status,
      data: {
        message: "Request timeout. Please try again.",
        code: "TIMEOUT_ERROR",
      },
    };
  }

  return error;
};

// Retry configuration for failed requests
export const retryConfig = {
  maxRetries: 3,
  retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000), // Exponential backoff
  retryCondition: (error) => {
    // Retry on network errors and 5xx errors
    return (
      error.status === "FETCH_ERROR" ||
      error.status === "TIMEOUT_ERROR" ||
      (error.status >= 500 && error.status < 600)
    );
  },
};

export default rtkQueryErrorMiddleware;
