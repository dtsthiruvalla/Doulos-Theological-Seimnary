// API Configuration
const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? // ? "https://dtsthiruvalla.com/api"
      "https://api.dtsthiruvalla.com"
    : "http://localhost:8080/api";

export const API_ENDPOINTS = {
  SUBMIT_APPLICATION: `${API_BASE_URL}/submit-application.php`,
  GET_COURSES: `${API_BASE_URL}/get-courses.php`,
  GET_APPLICATIONS: `${API_BASE_URL}/get-applications.php`,
  UPDATE_APPLICATION: `${API_BASE_URL}/update-application.php`,
  DELETE_APPLICATION: `${API_BASE_URL}/delete-application.php`,
  UPDATE_APPLICATION_STATUS: `${API_BASE_URL}/update-application-status.php`,
  ADMIN_LOGIN: `${API_BASE_URL}/admin-login.php`,
};

export default API_BASE_URL;
