import { Link } from "react-router-dom"
import { deleteUser, editUser, getUser } from "../apis/UserApis"
import { useState } from "react"

export default function MyAccount({setUserIsLoggedIn, userId}) {

    function deleteAccount(e) {
        deleteUser()
        setUserIsLoggedIn(false)
    }

    const [userDetails, setUserDetails] = useState({})

    const handleUserInput = (e) => {
        setUserDetails({...userDetails, [e.target.name]: e.target.value})
    }

    function editAccount(e) {
        e.preventDefault()
        editUser()
    }

    // const [currentUserDetails, setCurrentUserDetails] = useState()

    function getCurrentUser() {
        getUser(userId)
        .then((response) => console.log(response.data)
        .catch(e => `This is the error: ${e}`)
        )

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