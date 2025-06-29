import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: window.location.hostname === "localhost" ? "http://localhost:5000/api" : "https://evenza-server.vercel.app/api"
})