import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/Home';
import League from './pages/League';
import Overwatch from './pages/Overwatch';
import Valorant from './pages/Valorant';
import Misc from './pages/Misc';
import Upload from './pages/Upload';
import ApexLegends from './pages/ApexLegends';
import TheFinals from './pages/TheFinals';
import CounterStrike2 from './pages/CounterStrike2';
import ProfileEdit from './pages/Profile/ProfileEdit';
import Yomi from './pages/yomi';
import Profile from './pages/Profile/Profile';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import './App.css';
import './Form.css';
import './profile.css'
function App() {
  const isAuthenticated = true
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const handleLogin = async (loginData) => {
    try {
      setAuthenticated(true);
      setAccessToken(loginData.token);
  
    
      const username = loginData.username;
  
    
      navigate(`/profile/${username}`);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };



  return (
    <Router>
      
  <Nav isAuthenticated={isAuthenticated} />
  <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path="/League" element={<League />} />
    <Route path="/Overwatch" element={<Overwatch />} />
    <Route path="/Valorant" element={<Valorant />} />
    <Route path="/ApexLegends" element={<ApexLegends />} />
    <Route path="/TheFinals" element={<TheFinals />} />
    <Route path="/profile/:username" element={<Profile isAuthenticated={isAuthenticated} accessToken={accessToken} setLoading={setLoadingProfile} />} />
    <Route path="/profile/edit/:username" element={<ProfileEdit />} />
    <Route path="/CounterStrike2" element={<CounterStrike2 />} />
    <Route path="/Yomi" element={<Yomi />} />
    <Route path="/Misc" element={<Misc />} />
    <Route path="/Upload" element={<Upload />} />
    <Route path="/login" element={<Login onLogin={handleLogin} />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
</Router>

  );
}

export default App;
