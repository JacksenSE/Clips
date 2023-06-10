import React, { useEffect, useState } from 'react';
import Nav from '../components/nav';

function Misc() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = "#0A1428";
    return () => {
      document.body.style.backgroundColor = "#0A1428";
    };
  }, []);

  useEffect(() => {
    // Fetch the video data from the server
    async function fetchVideos() {
      try {
        const response = await fetch('http://localhost:4005/api/videos');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.log(error);
        alert("Error retrieving videos");
      }
    }

    fetchVideos();
  }, []);

  const filteredVideos = videos.filter(video => video.category === 'category4');

  return (
    <>
      <Nav />

      <div className="MiscB">
        <img src="MiscHead.svg" alt="Misc Header" />
      </div>

      <div className="MiscH">
        {filteredVideos.map((video) => (
          <div key={video.filename}>
            <video src={`http://localhost:4005/api/videos/${video.filename}`} controls></video>
          </div>
        ))}
      </div>
    </>
  );
}

export default Misc;
