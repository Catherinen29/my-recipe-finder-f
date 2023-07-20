import axios from "axios";

// The main instance of the HTTP request. 
// A general instance, where permissions are not required. 
export const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === "production"
                ? "https:/placeholder.com/"        
                : "http://localhost:4000",
    headers: {
        "Content-Type": "application/json"
    },
})

// An instance where permissions/authorization headers are 
// required for a successful call. 
export const axiosInstanceHeader = axios.create({
    baseURL: process.env.NODE_ENV === "production"
                ? "https:/placeholder.com/"        
                : "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
    }
})

axiosInstanceHeader.interceptors.request.use(
    function(config) {
        const token = localStorage.getItem("token")

    config.headers.Authorization =  token ? `${token}` : '';
    return config;
    }
)


// const axiosInstanceWithToken = axios.create({
//     baseURL: process.env.NODE_ENV === 'production' 
//                 ? 'https://placeholder.com/' 
//                 : 'http://localhost:4000',
//     headers: {
//         'Content-Type': 'application/json'
//     },
// });

// axiosInstanceWithToken.interceptors.request.use(function(config) {
//     const token = window.localStorage.getItem("token");
//     config.headers.Authorization =  token ? `${token}` : '';
//     return config;
// });