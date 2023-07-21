import axios from "axios";
import { axiosInstance, axiosInstanceHeader } from "./AxiosInstance";

// Function which will return confirmation of a successful call and
    // the new user record data. 
export const createUser = (userInfo) => {

    // Convert the user input to a format which will be accepted by the server. 
    const newUser = JSON.stringify({
        "user": {
            "email": `${userInfo.email}`,
            "firstname": `${userInfo.firstname}`,
            "lastname": `${userInfo.lastname}`,
            "password": `${userInfo.password}`
        }
    })
    console.log(`This is the newUser: ${newUser}`)

// Call to the server to create a new user record.
    const response = axiosInstance.post("/signup", newUser)
        .then((response) => console.log(response.data))
        .catch((e) => console.log(`This is the error: ${e}`))
}

// Function which will log the user in and begin a session, 
    // return confirmation and update local storage. 
export const userLogIn = (userInfo) => {
    
// Convert user input to the relevant format.
    const user = JSON.stringify({
        "user": {
            "email": `${userInfo.email}`,
            "password": `${userInfo.password}`
        }
    })

// Make the API call using the relevant data.
    const response = axiosInstance.post("/login", user)
        .then((response) => {
            if (response.headers.authorization) {
                console.log(response.headers.authorization, response.data.data.id)

                // Update local storage with the user's token and
                // the user id.
                localStorage.setItem("token", response.headers.authorization)
                localStorage.setItem("currentUserId", response.data.data.id)
            }
            
        })
        
        .catch((e) => console.log(`This is the error: ${e}`))
}

// Function to return the current user information. 
export const getUser = () => {
    const response = axiosInstanceHeader.get(`/users/${localStorage.getItem("currentUserId")})}`)
    .then((response) => console.log(response.data))
    .catch(e => console.log(`This is the error: ${e}`))

    return response.data;
}

// Function to log the user out, and end the session. 
export const userLogOut = () => {
    const response = axiosInstance.delete("/logout", {
    headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token") }
    })
    .then((response) => console.log(response))
    // .catch((e) => console.log(`this is the error: ${e}`))

    localStorage.removeItem("token")
    localStorage.removeItem("currentUserId")
}

// Function to delete the user record. 
export const deleteUser = () => {
    const response = axiosInstanceHeader.delete("/signup")
    .then((response) => console.log(response))
    .catch((e) => console.log(`This is the error: ${e}`))

}

// Function to edit the user record. 
export const editUser = () => {
    const response = axiosInstanceHeader.patch(`/users/${localStorage.getItem("currentUserId")}`)
    .then((response) => console.log(response))
    .catch(e => console.log(`This is the error: ${e}`))
}