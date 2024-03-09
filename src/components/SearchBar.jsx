import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleSearch = () => {
    // Navigate to the profile page with the entered username
    history.push(`/profile/${username}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
