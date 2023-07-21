import { Link } from "react-router-dom"
import { deleteUser, editUser, getUser } from "../apis/UserApis"
import { useState } from "react"

export default function MyAccount({setUserIsLoggedIn, userId}) {

    // Function to call the deleteUser function (./UserApis) to delete the user record. 
    function deleteAccount(e) {
        deleteUser()
        setUserIsLoggedIn(false)
    }

    const [userDetails, setUserDetails] = useState({})

    // Set the userDetails to the user's input.
    const handleUserInput = (e) => {
        setUserDetails({...userDetails, [e.target.name]: e.target.value})
    }

    // Function to call the editUser function (./UserApis) to update the user record. 
    function editAccount(e) {
        e.preventDefault()
        editUser()
    }

    // Function to call the getUser function (./UserApis) to get the current user details. 
    function getCurrentUser() {
        getUser(userId)
    }

    return(
        <>
        <Link to="/">Home</Link>

        <h1>My account</h1>

        <h3>My details</h3>
        <div>First name: {userDetails.firstname}</div>

        <button onClick={getCurrentUser}>Check</button>

        <button onClick={deleteAccount}>Delete account</button>

<br/>
<br/>

<h3>Edit</h3>

<form>
<label>Email</label>
    <input 
        name="email"
        // value={newUser.email}
        onChange={handleUserInput}
    />
    
    <br/>
    <br/>

    <label>First Name</label>
    <input 
        name="firstname"
        // value={newUser.firstname}
        onChange={handleUserInput}
    />

    <br/>
    <br/>            
    
    <label>Last Name</label>
    <input 
        name="lastname"
        // value={newUser.lastname}
        onChange={handleUserInput}
    />

    <br/>
    <br/>
    <label>Password</label>
    <input 
        name="password"
        // value={newUser.password}
        onChange={handleUserInput}
    />

    <br/>
    <br/>

    <button onClick={editAccount}>Submit</button>

</form> 
        
        </>
    )
}