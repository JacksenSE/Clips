import React, { useEffect, useState } from 'react';
import Nav from '../components/nav';

function CounterStrike2() {
  const [videos, setVideos] = useState([]);


  

  useEffect(() => {
    
    async function fetchVideos() {
      try {
        const response = await fetch('https://cfc555.ddns.net/api/videos');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.log(error);
        alert("Error retrieving videos");
      }
    }

    fetchVideos();
  }, []);

  const filteredVideos = videos.filter(video => video.category === 'category7');

  return (
    <>
      <Nav />

      <div className="Video-Container">
        {filteredVideos.map((video) => (
          <div key={video.filename} className="card">
            <video src={`https://cfc555.ddns.net/api/videos/${video.filename}`} controls></video>
            <h3 className="card-title">{video.title}</h3>
            <p className="card-text">{video.author}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CounterStrike2;
