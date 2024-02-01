import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../components/UserContext';
import { BsUpload } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
function Nav({ onLogout }) {
  const { userId, userData, updateUser } = useUser(); 
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!isLoading && userId && !userData) { 
          setIsLoading(true); 
          const response = await fetch(`https://cfc555.ddns.net/api/login/${userId}`, {
            headers: {
              Authorization: `Bearer ${userId}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const userData = await response.json();
            updateUser(userData);
          } else {
            console.error(`Failed to fetch user data with status ${response.status}`);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchUserData();
  }, [userId, userData, updateUser, isLoading]);


  const profileLink = userData ? (
    <li>
      <Link to={`/profile/${userId}`} className="Profile">
        {userData.username} Profile
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
          <Link to="/Upload" className="Upload">
            <BsUpload />
          </Link>
        </li>
        {userData ? (
          <li>
            <button onClick={onLogout} className="LogoutButton">
              Logout
            </button>
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
