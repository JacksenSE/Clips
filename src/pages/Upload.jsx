import React, { useState } from 'react';
import { Container, Form, ProgressBar } from 'react-bootstrap';
import Nav from '../components/nav';
import { useUser } from '../components/UserContext';

const CDNURL = "https://cfc555.ddns.net/api/videos/";

export const categoryMapping = {
  category9: 'League',
  category2: 'Overwatch',
  category3: 'Valorant',
  category4: 'The Finals',
  category5: 'YOMI Hustle',
  category6: 'Apex Legends',
  category7: 'CounterStrike 2',
  category8: 'Misc',
};

function Upload() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState('');
  const { accessToken } = useUser();
  const isAuthenticated = !!accessToken;

  async function uploadFile(e) {
    e.preventDefault();

    const videoFile = e.target.files[0];

    if (!title || !author || category === '') {
      setUploadStatus("Please enter both a title and an author, and select a valid category.");
      return;
    }

    if (!videoFile) {
      setUploadStatus("Please select a video to upload.");
      return;
    }

    if (videoFile.size > 500 * 1024 * 1024) {
      setUploadStatus("File size exceeds the maximum allowed (500MB). Please select a smaller file.");
      return;
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
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        onUploadProgress: progressEvent => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      setTitle('');
      setAuthor('');
      setCategory('');
      setUploadProgress(0);
      setUploadStatus("Video uploaded successfully!");
    } catch (error) {
      console.error(error);
      setUploadStatus("Error uploading file to server");
    }
  }

  return (
    <>
      <Nav isAuthenticated={isAuthenticated} /> 

      <Container className='mt-5 upload-container' style={{ backgroundColor: '#222' }}>
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
            <select
              id="category"
              name="category"
              className="form-input"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option >Please Choose A Category</option>
              {Object.entries(categoryMapping).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="video" className="form-label">Video</label>
            <label className="custom-file-upload">
              <input type="file" id="video" name="video" accept="video/mp4, video/quicktime" className="form-input" onChange={(e) => uploadFile(e)} />
              Select & Upload Video
            </label>
          </div>
          {uploadProgress > 0 && <ProgressBar now={uploadProgress} label={`${uploadProgress}%`} />}
          {uploadStatus && <p>{uploadStatus}</p>}
        </Form>
      </Container>
    </>
  );
}

export default Upload;
