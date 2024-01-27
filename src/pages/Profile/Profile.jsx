import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../../components/UserContext';
import { FaTrashAlt } from 'react-icons/fa';
import RandomPicture from '../../components/RandomPicture';
const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const { accessToken } = useUser();
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const randomProfilePicture = RandomPicture();

  const fetchUserData = async () => {
    try {
      if (accessToken) {
        const response = await fetch(`https://cfc555.ddns.net/api/login`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const userDataArray = await response.json();
          const loggedInUser = userDataArray.find((user) => user.username === username);

          if (loggedInUser) {
            setUser(loggedInUser);
          } else {
            console.error('Logged-in user not found in the response');
          }
        } else {
          console.error(`Failed to fetch user data with status ${response.status}`);
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    if (!accessToken) {
      console.error('Unauthorized access. Redirecting to login page.');
      navigate('/login');
    } else if (username) { 
      fetchUserData();
    }
  }, [accessToken, navigate, username]);

  const fetchVideos = async () => {
    try {
      const response = await fetch('https://cfc555.ddns.net/api/videos');

      if (response.ok) {
        const data = await response.json();
        setVideos(data);
      } else {
        console.error(`Failed to fetch videos with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error retrieving videos:', error);
    }
  };
  
  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    console.log('user:', user);
    console.log('videos:', videos);
  }, [user, videos]);

  if (!user) {
    return <p>Loading...</p>;
  }

  const userVideos = videos.filter((video) => user && video.author === user.username);



  const handleDeleteVideo = async (filename) => {
    try {
      const response = await fetch(`https://cfc555.ddns.net/api/videos/${filename}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        console.log('Video deleted successfully');
        fetchVideos();
      } else {
        console.error(`Failed to delete video with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  return (
    <div className="profile-container">
      <div className="user-details">
          <div className="profile-edit-container">
          </div>
          <>
            <h2 className="profile-heading">{user.username}'s Profile</h2>
            <img className="profile-picture" src={randomProfilePicture} alt="Profile Picture" />
            {user.bio && <p className="bio">{user.bio}</p>}
          </>
      </div>

      <div className="user-videos-container">
        <div className="user-videos">
          {userVideos.map((video) => (
            <div key={video.filename} className="video-card">
              <video src={`https://cfc555.ddns.net/api/videos/${video.filename}`} controls></video>
              {video.title && <h3 className="video-title">{video.title}</h3>}
              {video.author && <p className="video-author">{video.author}</p>}
              <button onClick={() => handleDeleteVideo(video.filename)}>
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
