import React, { useEffect, useState } from 'react';
import { categoryMapping } from '../pages/Upload';

function RandomClip() {
  const [videos, setVideos] = useState([]);
  const [randomVideo, setRandomVideo] = useState(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch('https://cfc555.ddns.net/api/videos');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.log(error);
        alert('Error retrieving videos');
      }
    }

    fetchVideos();
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      setRandomVideo(videos[randomIndex]);
    }
  }, [videos]);

  const loadRandomClip = () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setRandomVideo(videos[randomIndex]);
  };

  return (
    <>
      <div className="RVideo-Container">
        <button className="random-clip-button" onClick={loadRandomClip}>
          Random Clip
        </button>
        {randomVideo && (
          <div key={randomVideo.filename} className="Rcard">
            <video src={`https://cfc555.ddns.net/api/videos/${randomVideo.filename}`} controls></video>
            <h3 className="Rcard-title">{randomVideo.title}</h3>
            <p className="Rcard-text">By {randomVideo.author}</p>
            <h3 className="Rcard-game">{categoryMapping[randomVideo.category]}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default RandomClip;
