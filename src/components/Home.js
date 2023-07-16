import { useEffect, useState } from "react"
import { userLogIn, userLogOut } from "../apis/UserApis"
    import { Link } from "react-router-dom"

export default function Home ({
    currentUser, setUserIsLoggedIn, userIsLoggedIn}) {

    useEffect(() => {
        currentUser()
    }, [])

    const userId = localStorage.getItem("currentUserId")

    function logOut() {
        // console.log(localStorage.getItem("token"))
        userLogOut()
        setUserIsLoggedIn(false)
    }

    function check(e) {
        e.preventDefault()
        console.log(`tHIS IS THE USER id: ${userId}`)
    }

    return(
        <>
        
        <h1>My recipe finder</h1>

    { userIsLoggedIn ? 
        <h1>You are logged in!</h1> 
    : null }

        <br/>
        <br/>

    <Link to="/signup">Sign Up</Link>

        <br/>
        <br/>

    <Link to="/login">Log In</Link>

        <br/>
        <br/>

    <Link to="/myaccount">My Account</Link>

        <br/>
        <br/>

    <button onClick={logOut}>Log out</button>

        <br/>
        <br/>

    <button onClick={check}>CHECK USER ID</button>

        <br/>
        <br/>


        </>
    )
}