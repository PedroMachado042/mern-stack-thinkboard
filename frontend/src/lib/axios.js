import axios from "axios"

// in production you cant call localhost, so the url is dynamic
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api":"/api";
const api = axios.create({
    baseURL: BASE_URL
})

export default api;