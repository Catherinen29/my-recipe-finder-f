import { deleteUser, editUser } from "../apis/UserApis"
import { useState } from "react"

export default function MyAccount({setUserIsLoggedIn}) {



    function deleteAccount(e) {
        deleteUser()
        setUserIsLoggedIn(false)
    }

    const [userDetails, setUserDetails] = useState({
        email:"",
        firstname:"",
        lastname:"",
        password:""
    })

    const handleUserInput = (e) => {
        setUserDetails({...userDetails, [e.target.name]: e.target.value})
    }

    function editAccount(e) {
        e.preventDefault()
        editUser()
    }


    return(
        <>
        <h1>My account</h1>

        <button onClick={deleteAccount}>Delete account</button>

<br/>
<br/>

<h3>Edit</h3>

<form>
<label>Email</label>
    <input 
        name="email"
        value={newUser.email}
        onChange={handleUserInput}
    />
    
    <br/>
    <br/>

    <label>First Name</label>
    <input 
        name="firstname"
        value={newUser.firstname}
        onChange={handleUserInput}
    />

    <br/>
    <br/>            
    
    <label>Last Name</label>
    <input 
        name="lastname"
        value={newUser.lastname}
        onChange={handleUserInput}
    />

    <br/>
    <br/>
    <label>Password</label>
    <input 
        name="password"
        value={newUser.password}
        onChange={handleUserInput}
    />

    <br/>
    <br/>

    <button onClick={editAccount}>Submit</button>

</form> 
        
        </>
    )
}