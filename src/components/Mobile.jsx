import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../components/UserContext';
import { BsUpload } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';

function Mobile({ onLogout }) {
  const { userId, userData, updateUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const profileLink = userData ? (
    <li>
      <Link to={`/profile/${userId}`} className="Profile" onClick={handleLinkClick}>
        {userData.username} Profile
      </Link>
    </li>
  ) : null;

  return (
    <nav className="NavMobile">
      <div className="NavToggle" onClick={handleToggleMenu}>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
      </div>
      <ul className={`NavDropdown ${menuOpen ? 'active' : ''}`} id="navDropdown">
        <li>
          <Link to="/" className="Home" onClick={handleLinkClick}>
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/League" className="League" onClick={handleLinkClick}>
            League
          </Link>
        </li>
        <li>
          <Link to="/Overwatch" className="Overwatch" onClick={handleLinkClick}>
            Overwatch
          </Link>
        </li>
        <li>
          <Link to="/Valorant" className="Valorant" onClick={handleLinkClick}>
            Valorant
          </Link>
        </li>
        <li>
          <Link to="/TheFinals" className="TheFinals" onClick={handleLinkClick}>
            The Finals
          </Link>
        </li>
        <li>
          <Link to="/Yomi" className="Yomi" onClick={handleLinkClick}>
            Yomi Hustle
          </Link>
        </li>
        <li>
          <Link to="/ApexLegends" className="ApexLegends" onClick={handleLinkClick}>
            Apex Legends
          </Link>
        </li>
        <li>
          <Link to="/CounterStrike2" className="CounterStrike2" onClick={handleLinkClick}>
            Counter Strike 2
          </Link>
        </li>
        <li>
          <Link to="/Misc" className="Misc" onClick={handleLinkClick}>
            Misc
          </Link>
        </li>
        {profileLink}
        <li>
          <Link to="/Upload" className="Upload" onClick={handleLinkClick}>
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
              <Link to="/login" className="LoginLink" onClick={handleLinkClick}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="SignupLink" onClick={handleLinkClick}>
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Mobile;
