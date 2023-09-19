import React, { useEffect, useState } from 'react';
import Nav from '../components/nav';

function Rainbow6Siege() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const previousBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#BFBA9F";
    return () => {
      document.body.style.backgroundColor = previousBackgroundColor;
    };
  }, []);
  

  useEffect(() => {
    // Fetch the video data from the server
    async function fetchVideos() {
      try {
        const response = await fetch('http://cfc555.ddns.net:74/api/videos');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.log(error);
        alert("Error retrieving videos");
      }
    }

    fetchVideos();
  }, []);

  const filteredVideos = videos.filter(video => video.category === 'category5');

  return (
    <>
      <Nav />


      <div className="Video-Container">
        {filteredVideos.map((video) => (
          <div key={video.filename} className="card">
            <video src={`http://cfc555.ddns.net:74/api/videos/${video.filename}`} controls></video>
            <h3 className="card-title">{video.title}</h3>
            <p className="card-text">{video.author}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Rainbow6Siege;
