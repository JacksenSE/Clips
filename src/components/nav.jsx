// nav.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BsUpload } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { useUser } from '../components/UserContext';


const getUser = async (username) => {
  try {
    if (username) {
      const response = await fetch(`https://cfc555.ddns.net/api/login/`, {
        headers: {
          Authorization: `Bearer ${username}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userData = await response.json();

        return userData;
      } else {
        console.error(`Failed to fetch user data with status ${response.status}`);
        return null;
      }
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

function Nav({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { username, updateUser, logout } = useUser();

  const isProfileRoute =
    location.pathname.startsWith('/profile') ||
    location.pathname === '/League' ||
    location.pathname === '/Overwatch' ||
    location.pathname === '/Valorant' ||
    location.pathname === '/TheFinals' ||
    location.pathname === '/Yomi' ||
    location.pathname === '/ApexLegends' ||
    location.pathname === '/CounterStrike2' ||
    location.pathname === '/Misc' ||
    location.pathname === '/Upload' ||
    location.pathname === '/';

  const profileLink =
    isAuthenticated && isProfileRoute ? (
      <li>
        <Link to={`/profile/${username || 'wwwwww'}`} className="Profile">
          Profile
        </Link>
      </li>
    ) : null;
  
  return (
    <div className="Nav">
      <ul className="NavList">
        <li>
          <Link to="/" className="Home">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/League" className="League">
            League
          </Link>
        </li>
        <li>
          <Link to="/Overwatch" className="Overwatch">
            Overwatch
          </Link>
        </li>
        <li>
          <Link to="/Valorant" className="Valorant">
            Valorant
          </Link>
        </li>
        <li>
          <Link to="/TheFinals" className="TheFinals">
            The Finals
          </Link>
        </li>
        <li>
          <Link to="/Yomi" className="Yomi">
            Yomi Hustle
          </Link>
        </li>
        <li>
          <Link to="/ApexLegends" className="ApexLegends">
            Apex Legends
          </Link>
        </li>
        <li>
          <Link to="/CounterStrike2" className="CounterStrike2">
            Counter Strike 2
          </Link>
        </li>
        <li>
          <Link to="/Misc" className="Misc">
            Misc
          </Link>
        </li>
        {profileLink}
        <li>
          {isAuthenticated ? (
            <Link to="/Upload" className="Upload">
              <BsUpload />
            </Link>
          ) : null}
        </li>

        {isAuthenticated ? (
          <li>
            <button onClick={onLogout} className='LogoutButton'>Logout</button>
          </li>
        ) : (
          <>
  <li>
    <Link to="/login" className="LoginLink">
      Login
    </Link>
  </li>
  <li>
    <Link to="/signup" className="SignupLink">
      Signup
    </Link>
  </li>
</>
        )}
      </ul>
    </div>
  );
}

export default Nav;
