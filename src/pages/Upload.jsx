import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';

const CDNURL = "http://localhost:4005/api/videos/";

function Upload() {
  const [videos, setVideos] = useState([]);


  async function getVideos() {
    try {
      const response = await fetch('http://localhost:4005/api/videos');
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

    try {
      const formData = new FormData();
      formData.append('video', videoFile);
      formData.append('title', title);
      formData.append('author', author);
      formData.append('category', category);

      const response = await fetch('http://localhost:4005/api/videos', {
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
    <Container className='mt-5' style={{ width: "700px", backgroundColor: "white" }}>
      <h1>Video Upload</h1>
      <Form className="upload-form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" id="title" name="title" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" id="author" name="author" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="category" className="form-label">Category</label>
          <select id="category" name="category" className="form-input">
            <option value="category1">League</option>
            <option value="category2">Overwatch</option>
            <option value="category3">Valorant</option>
            <option value="category4">Misc</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="video" className="form-label">Video</label>
          <input type="file" id="video" name="video" accept="video/*" className="form-input" onChange={(e) => uploadFile(e)} />
        </div>
      </Form>
      <button><a href="/"className="Home">Home</a></button>
      
      <h1>VideoFeed</h1>
      <Row xs={1} className="g-4">
        {videos.map((video) => (
          <Col key={video.filename}>
            <Card>
              <video height="380px" controls>
                <source src={CDNURL + video.filename} type="video/mp4" />
              </video>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
  
}

export default Upload;
