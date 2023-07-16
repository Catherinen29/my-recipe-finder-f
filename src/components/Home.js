import { useState } from "react"
import { createUser } from "../apis/UserApis"

export default function Home () {


    const [newUser, setNewUser] = useState({
        email:"",
        firstname:"",
        lastname:"",
        password:""
    })

    const handleInput = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    function login(e) {
        // console.log(newUser)
        e.preventDefault()
        createUser(newUser)
    }

    return(
        <>
        
        <h1>My recipe finder</h1>

        <h3>Log in</h3>
        
        <form>
            <label>Email</label>
            <input 
                name="email"
                value={newUser.email}
                onChange={handleInput}
            />
            
            <br/>
            <br/>

            <label>First Name</label>
            <input 
                name="firstname"
                value={newUser.firstname}
                onChange={handleInput}
            />

            <br/>
            <br/>            
            
            <label>Last Name</label>
            <input 
                name="lastname"
                value={newUser.lastname}
                onChange={handleInput}
            />

            <br/>
            <br/>
            <label>Password</label>
            <input 
                name="password"
                value={newUser.password}
                onChange={handleInput}
            />

            <br/>
            <br/>

            <button onClick={login}>Submit</button>
        </form>

        </>
    )
}