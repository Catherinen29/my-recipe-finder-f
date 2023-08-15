import { useEffect, useState } from "react"
import { userLogIn, userLogOut, getUser } from "../apis/UserApis"
    import { Link } from "react-router-dom"
import SearchRecipes from "./Search"

export default function Home ({
    currentUser, setUserIsLoggedIn, userIsLoggedIn}) {

const [userDetails, setUserDetails] = useState({})

    // Call the current user function on page load. 
    useEffect(() => {
        currentUser()
    }, [])

    // Get the current userId from local storage. 
    const userId = localStorage.getItem("currentUserId")

    // A function which calls the function to make the API call to end the session. 
    function logOut() {
        // console.log(localStorage.getItem("token"))
        userLogOut()
        setUserIsLoggedIn(false)
    }

    // Get user details. Set state. 
    function check(e) {
        e.preventDefault()
        getUser()
        .then(res => setUserDetails(res.id))
        .catch(e => console.log(`this is the getUser error: `, e))
    }

    return(
        <>
        
        <h1>My recipe finder</h1>

    { userIsLoggedIn && 
        <h1>You are logged in!</h1> 
    }

        <br/>
        <br/>

    { !userIsLoggedIn &&
        <Link to="/signup">Sign Up</Link>
    }

        <br/>
        <br/>

    { !userIsLoggedIn &&
        <Link to="/login">Log In</Link>
    }
        <br/>
        <br/>

    { userIsLoggedIn && 
        <Link to="/myaccount"
            userId={userId}>My Account</Link>
    }
        <br/>
        <br/>
    
    { userIsLoggedIn && 
        <button onClick={logOut}>Log out</button>
    }
        <br/>
        <br/>

    { userIsLoggedIn && 
        <button onClick={check}>CHECK USER ID</button>
    }

    <SearchRecipes />

        <br/>
        <br/>


        </>
    )
}