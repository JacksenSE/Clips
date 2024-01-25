import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from "./nav";
import RandomClip from "./RandomClip";
import Goat from "../assets/Hireme.gif";
import Login from "./Login/Login";
import Signup from "./Signup/Signup"; 
import { useUser } from './UserContext'; 

function Home() {
  const { accessToken, logout } = useUser();
  const isAuthenticated = !!accessToken;
  const [showLogin, setShowLogin] = useState(false); 
  const [showSignup, setShowSignup] = useState(false); 

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(!showSignup);
    setShowLogin(false);
  };

  const handleLogout = () => {
 
    logout();
  };

  return (
    <>
      <Nav isAuthenticated={isAuthenticated} onLogout={handleLogout} className="centered-nav" />
      <RandomClip className="RandomClip" />
      <img src={Goat} alt="Goat" className="Goat" />
      <p className="GoatH">Hire Me </p>


      {showLogin && <Login />} 
      {showSignup && <Signup />}
    </>
  );
}

export default Home;
