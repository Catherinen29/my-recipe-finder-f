
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import MyAccount from './components/MyAccount';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Signup from './components/Signup';

function App() {

// State which confirms whether user is logged in or not. 
const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)

// Function which sets userIsLoggedIn state  by accessing local storage.
const currentUser = () => {
    if (localStorage.getItem("token")) {
        setUserIsLoggedIn(true)
    }
}

  return (
    <>
    {/* Routes to each of the relevant components.  */}
    <Routes>
        <Route path="/" element={<Home 
            currentUser={currentUser}
            setUserIsLoggedIn={setUserIsLoggedIn}
            userIsLoggedIn={userIsLoggedIn}
          />} />
        <Route path="/login" element={<Login 
            setUserIsLoggedIn={setUserIsLoggedIn}/>} />

        <Route path="/signup" element={<Signup />} />

        <Route path="myaccount" element={<MyAccount 
            setUserIsLoggedIn={setUserIsLoggedIn} />} />
    </Routes>
      

    </>
  )
}

export default App;
