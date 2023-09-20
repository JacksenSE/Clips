import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';
import Nav from '../components/nav';
import { Link } from 'react-router-dom';
const CDNURL = "http://localhost:4005/api/videos/";

function Upload() {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  async function getVideos() {
    try {
      const response = await fetch('https://cfc555.ddns.net/api/videos');
      const data = await response.json();

      setVideos(data);
    } catch (error) {
      console.log(error);
      alert("Error grabbing files from PostgreSQL");
    }
  }

  async function uploadFile(e) {
    const videoFile = e.target.files[0];
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const category = document.getElementById("category").value;
    
    if (!title || !author) {
      alert("Please enter both a title and an author.");
      return;
    }

    if (videoFile.size > 200 * 1024 * 1024) {
      alert("File size exceeds the maximum allowed (200MB). Please select a smaller file.");
      return; // Prevent further execution
    }

    try {
      const formData = new FormData();
      formData.append('video', videoFile);
      formData.append('title', title);
      formData.append('author', author);
      formData.append('category', category);

      const response = await fetch('https://cfc555.ddns.net/api/videos', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      getVideos();
    } catch (error) {
      console.log(error);
      alert("Error uploading file to PostgreSQL");
    }
  }

  return (
    <>
    <Nav />
   
    <Container className='mt-5 upload-container' style={{ backgroundColor: "gray" }}>
      <h1 className='Video-Title'>Video Upload</h1>    
     <Form className="upload-form">
  <div className="form-group">
    <label htmlFor="title" className="form-label">Title</label>
    <input
      type="text"
      id="title"
      name="title"
      className="form-input"
      placeholder='Title is required.'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="author" className="form-label">Author</label>
    <input
      type="text"
      id="author"
      name="author"
      className="form-input"
      placeholder="Author is required."
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="category" className="form-label">Category</label>
    <select id="category" name="category" className="form-input">
      <option value="category1">League</option>
      <option value="category2">Overwatch</option>
      <option value="category3">Valorant</option>
      <option value="category4">BattleBit Remastered</option>
      <option value="category5">Rainbow 6 Siege</option>
      <option value="category6">Apex Legends</option>
      <option value="category7">CounterStrike 2</option>
      <option value="category8">Misc</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="video" className="form-label">Video</label>
    <label className="custom-file-upload">
      <input type="file" id="video" name="video" accept="video/*" className="form-input" onChange={(e) => uploadFile(e)} />
      Select a Video
    </label>
  </div>
  {(!title || !author )}
  <button className="submit-button" onClick={(e) => uploadFile(e)}>Upload</button>
</Form>
    </Container>
    </>
  );
}

export default Upload;
