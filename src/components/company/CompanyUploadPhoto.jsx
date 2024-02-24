import React, { useState } from 'react';
import EastIcon from '@mui/icons-material/East';

function CompanyUploadPhoto() {

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!file) {
        console.log('No file selected');
        return;
      }
  
      const formData = new FormData();
      formData.append('image', file);
  
      try {
        const response = await fetch('http://your-api-endpoint.com/upload', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        console.log('Image uploaded successfully:', data.filePath);
        
        // Now you can store the file path (data.filePath) in your database
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };

    return (
        <div className="upload-container">
            <h1 className='upload-h1'>Upload Your Photo</h1>
            <form onSubmit={handleSubmit} onChange={handleFileChange} className="upload-form" action="upload.php" method="POST" encType="multipart/form-data">
                <input type="file" name="file" id="file" accept="image/*" required />
                <button type="submit" className='upload-button'>Upload</button>
            </form>
            <div className="skip-link">
                <span>Skip</span>
            </div>
        </div>
    );
}

export default CompanyUploadPhoto;
