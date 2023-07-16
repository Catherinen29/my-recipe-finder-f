import axios from "axios";
import axiosInstance from "./AxiosInstance";

export const createUser = (userInfo) => {

    const newUser = JSON.stringify({
        "user": {
            "email": `${userInfo.email}`,
            "firstname": `${userInfo.firstname}`,
            "lastname": `${userInfo.lastname}`,
            "password": `${userInfo.password}`
        }
    })
    console.log(`This is the newUser: ${newUser}`)

    const response = axiosInstance.post("/signup", newUser)
        .then((response) => console.log(response.data))
        .catch((e) => console.log(`This is the error: ${e}`))
}