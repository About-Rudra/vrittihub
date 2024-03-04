import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

function CompanyUploadPhoto() {

    const [file, setFile] = useState(null);
    const email = Cookies.get('email');

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
        const response = await fetch(`http://localhost:5000/companyupload/${email}`, {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        console.log('Image uploaded successfully:', data.filePath);
        navigateToCompanyProfilePage();
        // Now you can store the file path (data.filePath) in your database
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };
    const navigate = useNavigate();
  function navigateToCompanyProfilePage() {
    navigate('/companyprofilepage')
  }

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
