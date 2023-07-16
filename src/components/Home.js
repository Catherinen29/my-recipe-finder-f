import { useEffect, useState } from "react"
import { userLogIn, userLogOut, 
    deleteUser, editUser } from "../apis/UserApis"
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

    function deleteAccount(e) {
        deleteUser()
        setUserIsLoggedIn(false)
    }

    function editAccount(e) {
        e.preventDefault()
        editUser()
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

    <button onClick={logOut}>Log out</button>

        <br/>
        <br/>

    <button onClick={check}>CHECK USER ID</button>

        <br/>
        <br/>

    <button onClick={deleteAccount}>Delete account</button>

        <br/>
        <br/>

    <h3>Edit</h3>
        {/* <form>
        <label>Email</label>
            <input 
                name="email"
                value={newUser.email}
                onChange={handleNewUserInput}
            />
            
            <br/>
            <br/>

            <label>First Name</label>
            <input 
                name="firstname"
                value={newUser.firstname}
                onChange={handleNewUserInput}
            />

            <br/>
            <br/>            
            
            <label>Last Name</label>
            <input 
                name="lastname"
                value={newUser.lastname}
                onChange={handleNewUserInput}
            />

            <br/>
            <br/>
            <label>Password</label>
            <input 
                name="password"
                value={newUser.password}
                onChange={handleNewUserInput}
            />

            <br/>
            <br/>

            <button onClick={editAccount}>Submit</button>

        </form> */}
        </>
    )
}