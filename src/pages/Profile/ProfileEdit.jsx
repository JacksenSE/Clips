import React, { useState, useEffect } from 'react';

const ProfileEdit = ({ user, onUpdateProfile }) => {
  // Log the user prop to check if the component receives the expected data
  console.log('user in ProfileEdit:', user);

  const [editedData, setEditedData] = useState({
    username: (user && user.username) || '',
    profilePicture: (user && user.profilePicture) || '',
    bio: (user && user.bio) || '',
  });

  useEffect(() => {
   
    console.log('editedData:', editedData);

    setEditedData({
      username: (user && user.username) || '',
      profilePicture: (user && user.profilePicture) || '',
      bio: (user && user.bio) || '',
    });
  }, [user]);

  const handleChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(editedData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={editedData.username}
        onChange={handleChange}
      />

      <label>Profile Picture:</label>
      <input
        type="text"
        name="profilePicture"
        value={editedData.profilePicture}
        onChange={handleChange}
      />

      <label>Bio:</label>
      <textarea
        name="bio"
        value={editedData.bio}
        onChange={handleChange}
      />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default ProfileEdit;