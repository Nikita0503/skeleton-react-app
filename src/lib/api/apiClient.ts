// ==============================================
// Axios Instance
// Single configured axios instance used for all API calls.
// Base URL, interceptors, and default headers are set up here.
//
// Usage: import { apiClient } from '@/lib/api/apiClient';
//        apiClient.get('/tours');
// ==============================================

import axios from 'axios';

export const apiClient = axios.create({
  // TODO: Replace with your real API URL (use env variable)
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// ---- Request Interceptor ----
// Runs before every request. Use for attaching auth tokens.
apiClient.interceptors.request.use(
  (config) => {
    // TODO: Get token from your auth store/localStorage
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// ---- Response Interceptor ----
// Runs after every response. Use for global error handling.
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // TODO: Handle specific error codes globally
    // if (error.response?.status === 401) {
    //   // Redirect to login or refresh token
    // }
    return Promise.reject(error);
  },
);
