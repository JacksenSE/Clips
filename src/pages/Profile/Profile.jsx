import React, { useState, useEffect } from 'react';
import { useUser } from '../../components/UserContext';
import { FaTrashAlt } from 'react-icons/fa';
import RandomPicture from '../../components/RandomPicture';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedProfileData, setUpdatedProfileData] = useState({});
  const { accessToken, userId } = useUser(); // Get userId from useUser
  const [videos, setVideos] = useState([]);
  const randomProfilePicture = RandomPicture();

  const fetchUserData = async (token, userId) => {
    try {
      const response = await fetch(`https://cfc555.ddns.net/api/login/${userId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error(`Request failed with status ${response.status}`);
        return null;
      }

      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!accessToken) {
          console.error('Unauthorized access. Redirecting to login page.');
          // Handle unauthorized access
          return;
        }

        // Fetch user data using the saved userId
        const userData = await fetchUserData(accessToken, userId);
        setUser(userData); // Update the user state here
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData(); // Call the fetchData function
  }, [accessToken, userId]);

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

  const handleEditProfileClick = () => {
    setIsEditMode(true);
    // Initialize updated profile data with current user data
    setUpdatedProfileData({
      username: user.username,
      bio: user.bio || '', // Ensure bio is initialized even if it's not present in the user object
    });
  };

  const handleUpdateProfile = async () => {
    console.log('Updating profile with data:', updatedProfileData);

    try {
      const response = await fetch(`https://cfc555.ddns.net/api/login/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(updatedProfileData),
      });

      if (response.ok) {
        console.log('Profile updated successfully');
        fetchUserData(accessToken, userId); // Fetch updated user data
        setIsEditMode(false); // Exit edit mode
      } else {
        console.error(`Failed to update profile with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  const userVideos = videos.filter((video) => user && video.author === user.username);

  return (
    <div className="profile-container">
      <div className="user-details">
        <div className="profile-edit-container">
          {isEditMode ? (
            <>
            <h4 className='Username-Header'>Username</h4>
              <input
                type="text"
                name="username"
                value={updatedProfileData.username}
                onChange={handleChange}
              />
              <h4 className='Bio-Header'>Bio</h4>
              <textarea
                name="bio"
                value={updatedProfileData.bio}
                onChange={handleChange}
              ></textarea>
              <button onClick={handleUpdateProfile}>Save Profile</button>
            </>
          ) : (
            <>
              <h2 className="profile-heading">{user.username}'s Profile</h2>
              <img
                className="profile-picture"
                src={randomProfilePicture}
                alt="Profile Picture"
              />
              {user.bio && <p className="bio">{user.bio}</p>}
              <button onClick={handleEditProfileClick}>Edit Profile</button>
            </>
          )}
        </div>
      </div>
      <div className="user-videos-container">
        <div className="user-videos">
          {userVideos.map((video) => (
            <div key={video.filename} className="video-card">
              <video
                src={`https://cfc555.ddns.net/api/videos/${video.filename}`}
                controls
              ></video>
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
