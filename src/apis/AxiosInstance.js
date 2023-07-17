import axios from "axios";

// The main instance of the HTTP request. 
// A general instance, where permissions are not required. 
export const axiosInstance = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json"
    },
})

// An instance where permissions/authorization headers are 
// required for a successful call. 
export const axiosInstanceHeader = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token") 
    }
})
// export default axiosInstance;