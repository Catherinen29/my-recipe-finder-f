import { useState } from "react"
import { createUser, userLogIn } from "../apis/UserApis"

export default function Home () {


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

    const [existingUserData, setExistingUserData] =useState({
        email:"",
        password:""
    })
    const handleLogInData = (e) => {
        setExistingUserData({...existingUserData, [e.target.name]: e.target.value})
    }

    function logUserIn(e) {
        e.preventDefault()
        userLogIn(existingUserData)
    }

    return(
        <>
        
        <h1>My recipe finder</h1>

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


    <h3>Log in</h3>
        <form>
            <label>Email</label>
            <input 
                name="email"
                value={existingUserData.email}
                onChange={handleLogInData}
            />

            <label>Password</label>
            <input 
                name="password"
                value={existingUserData.password}
                onChange={handleLogInData}
            />
        <br/>
        <button onClick={logUserIn}>Log in</button>
        </form>
            </>
    )
}