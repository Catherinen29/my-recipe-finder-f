import axios from "axios";
import { axiosInstance, axiosInstanceHeader } from "./AxiosInstance";

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


export const userLogIn = (userInfo) => {
    const user = JSON.stringify({
        "user": {
            "email": `${userInfo.email}`,
            "password": `${userInfo.password}`
        }
    })
    const response = axiosInstance.post("/login", user)
        .then((response) => {
            if (response.headers.authorization) {
                console.log(response.headers.authorization, response.data.data.id)
                localStorage.setItem("token", response.headers.authorization)
                localStorage.setItem("currentUserId", response.data.data.id)
            }
            
        })
        
        .catch((e) => console.log(`This is the error: ${e}`))
}

export const getUser = (id) => {
    const response = axiosInstance.get(`/users/${id}`)
    .then((response) => console.log(response))
    .catch(e => console.log(`This is the error: ${e}`))

}

export const userLogOut = () => {
    const response = axiosInstanceHeader.delete("/logout")
    .then((response) => console.log(response))
    .catch((e) => console.log(`this is the error: ${e}`))

    localStorage.removeItem("token")
    localStorage.removeItem("currentUserId")
}

export const deleteUser = () => {
    const response = axiosInstanceHeader.delete("/signup")
    .then((response) => console.log(response))
    .catch((e) => console.log(`This is the error: ${e}`))

}

export const editUser = () => {
    const response = axiosInstanceHeader.patch(`/users/${localStorage.getItem("currentUserId")}`)
    .then((response) => console.log(response))
    .catch(e => console.log(`This is the error: ${e}`))
}