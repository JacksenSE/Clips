import React from 'react';

function Upload() {
  return (
    <div className="F-contain">
      <form action="/upload" method="post" encType="multipart/form-data" className="upload-form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" id="title" name="Title" className="form-input" />
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
          <input type="file" id="video" name="video" accept="video/*" className="form-input" />
        </div>
        <button type="submit" className="upload-button">Upload</button>
      </form>
      <div className='Back'>
      <a href='/'><button>Back</button></a>
      </div>
    </div>
  );
}

export default Upload;
