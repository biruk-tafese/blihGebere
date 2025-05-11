// Base URL for the API
const BASE_URL = "http://127.0.0.1:5000";

// Auth Endpoints
const AUTH = {
    REGISTER: `${BASE_URL}/register`,
    LOGIN: `${BASE_URL}/login`,
};

// Crop Endpoints
const CROP = {
    GET_CROP: `${BASE_URL}/crop`,
};

// Area Endpoints
const AREA = {
    GET_AREA: `${BASE_URL}/area`,
};

// Predict Endpoints
const PREDICT = {
    DOWNLOAD_EXCEL: `${BASE_URL}/predict/download-result-excel`,
    DOWNLOAD_PDF: `${BASE_URL}/predict/download-result-pdf`,
    DOWNLOAD_CSV: `${BASE_URL}/predict/download-result-csv`,
};

// Profile Endpoints
const PROFILE = {
    GET_PROFILE: `${BASE_URL}/profile`,
    UPDATE_PROFILE: `${BASE_URL}/update_profile`,
    UPDATE_PASSWORD: `${BASE_URL}/update_password`,
};

// System Admin Endpoints
const ADMIN = {
    CREATE_USER: `${BASE_URL}/admin/create-user`,
    UPDATE_USER: (userId) => `${BASE_URL}/admin/update-user/${userId}`, // Replace userId dynamically
    DELETE_USER: (userId) => `${BASE_URL}/admin/delete-user/${userId}`, // Replace userId dynamically
};

// Welcome Endpoint
const WELCOME = {
    HOME: `${BASE_URL}`,
};

// Export all endpoints
export {
    AUTH,
    CROP,
    AREA,
    PREDICT,
    PROFILE,
    ADMIN,
    WELCOME,
};