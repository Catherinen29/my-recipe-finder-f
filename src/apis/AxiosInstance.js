import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json"
    },
})

export const axiosInstanceHeader = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token") 
    }
})
// export default axiosInstance;