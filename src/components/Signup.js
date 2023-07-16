import { useState } from "react";
import { createUser } from "../apis/UserApis";

export default function Signup() {

    const [newUser, setNewUser] = useState({
        email:"",
        firstname:"",
        lastname:"",
        password:""
    })

    const handleNewUserInput = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    function signup(e) {
        // console.log(newUser)
        e.preventDefault()
        createUser(newUser)
    }

    return (
    <>
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