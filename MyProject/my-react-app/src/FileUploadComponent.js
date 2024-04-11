import React, { useState } from 'react';
import { signIn } from './cognito-auth';
import uploadFileToS3 from './s3-upload';

const FileUploadComponent = () => {
    const [inputText, setInputText] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleTextChange = (event) => {
        setInputText(event.target.value);
    };

    const handleUpload = async () => {
        try {
            await signIn('username', 'password'); // Authenticate
            const result = await uploadFileToS3(file); // Upload
            console.log(result);
        } catch (error) {
            console.error('Upload failed', error);
        }
    };

    return (
        <div>
            <div>
        <label htmlFor="inputText">Text Input: </label>
            <input type="text" value={inputText} onChange={handleTextChange} />
        </div>
            <div>
        <label htmlFor="file">File Input: </label>
            <input type="file" onChange={handleFileChange} />
            </div>
            <div>
            <button onClick={handleUpload}>Submit</button>
            </div>
        </div>
    );
};

export default FileUploadComponent;
