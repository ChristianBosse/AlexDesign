import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

api.interceptors.request.use(
    config => {
        // Add token to request headers
        const token = localStorage.getItem("token"); // Adjust to your storage method
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

export default api;
