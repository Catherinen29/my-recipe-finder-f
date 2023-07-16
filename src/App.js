
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Signup from './components/Signup';

function App() {

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)

const currentUser = () => {
    if (localStorage.getItem("token")) {
        setUserIsLoggedIn(true)
    }
}

  return (
    <>
    <Routes>
        <Route path="/" element={<Home 
            currentUser={currentUser}
            setUserIsLoggedIn={setUserIsLoggedIn}
            userIsLoggedIn={userIsLoggedIn}
          />} />
        <Route path="/login" element={<Login 
            setUserIsLoggedIn={setUserIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
      

    </>
  )
}

export default App;
