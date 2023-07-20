import { useState } from "react";
import { createUser } from "../apis/UserApis";
import { Link } from "react-router-dom";

export default function Signup() {

    const [newUser, setNewUser] = useState({
        email:"",
        firstname:"",
        lastname:"",
        password:""
    })

    // Set the newUser state to the user's input. 
    const handleNewUserInput = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    // Function which uses newUser state to call the createUser function (./UserApis) to create a user API. 
    function signup(e) {
        // console.log(newUser)
        e.preventDefault()
        createUser(newUser)
    }

    return (
    <>
    <Link to="/">Home</Link>
            <h3>Sign up</h3>
        
        <form>
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

            <button onClick={signup}>Submit</button>
        </form>
    </>
    )
}