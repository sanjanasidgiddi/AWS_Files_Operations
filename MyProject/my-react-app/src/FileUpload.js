import React, { useState } from 'react';

function FileUpload() {
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the file submission here. For demonstration, we'll log the values.
    console.log('File Name:', fileName);
    console.log('Selected File:', file);
    // Implementation to save the file with the given name goes here.
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
    <div>
    <label htmlFor="fileName">Text Input: </label>
      <input
        type="text"
        value={fileName}
        onChange={handleFileNameChange}
        className="input input-bordered w-full max-w-xs"
      />
      </div>
      <div>
      <label htmlFor="fileInput">File Input: </label>
      <input
        type="file"
        onChange={handleFileChange}
        className="input input-bordered w-full max-w-xs"
      />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default FileUpload;