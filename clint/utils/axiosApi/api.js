import axios from "axios";


export const  API = axios.create({
    baseURL: "http://localhost:5050/api/v1",
    withCredentials: true,
    timeout: 20000
})