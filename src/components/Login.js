import { useState } from "react"
import { userLogIn } from "../apis/UserApis"
import { useNavigate } from "react-router-dom"

export default function Login({setUserIsLoggedIn}){

    const navigate = useNavigate()

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
        setUserIsLoggedIn(true)
        navigate("/")
    }

    return(
<>
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
