import React from 'react';

function Upload() {
  return (
    <div className="F-contain">
      <form action="/upload" method="post" encType="multipart/form-data" className="upload-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="Title" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="video">Video</label>
          <input type="file" id="video" name="video" accept="video/*" className="form-input" />
        </div>
        <button type="submit" className="upload-button">Upload</button>
      </form>
    </div>
  );
}

export default Upload;
