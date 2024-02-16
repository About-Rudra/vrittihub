import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from "../general/Modal";
import CompanyProfilePage from "./CompanyProfilePage";

function CompanyNewInternship() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyname: '',
    qualification: '',
    contactnumber: '',
    position: '',
    skills: '',
    jd: '',
    email: '',
    location: '',
    interesteddomain: '',
  });
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit event fired: ', JSON.stringify(formData));
    if (Object.values(formData).some(value => value.trim() === '')) {
      // At least one field is empty, display error message or prevent navigation
      alert('Please fill out all fields');
      return; // Exit early, don't proceed to next page
    } else {
      handleOpen();
    }

    fetch('http://localhost:5000/postinternship', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data posted successfully:', data);
        // Optionally, update UI based on response
      })
      .catch((error) => {
        console.error('Error posting data:', error);
        // Optionally, handle error
      });

      console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({ companyname: '', qualification: '', contactnumber: '', position: '', skills: '', jd: '', email: '', location: '', interesteddomain: ''});
    setTimeout(() => {
      navigateToCompanyProfilePage();
    }, 2000);
  };

  const navigate = useNavigate();
  function navigateToCompanyProfilePage() {
    navigate('/companyprofilepage')
  }

  return (
    <div id="signupCoContainer">
        <div id="right">
            
            <h1><br />Post New Internship:) </h1>
         </div>

         <div id="signupCoForm1">
            <div class="rectangle11"></div>
            <div class="rectangle22"></div>
            
            
            <div class="signupCogroup1">
                <h2 id="head1">Internship Details</h2>
                <form onSubmit={handleSubmit}>
                <input type="text" class="cogform1" id="formGroupExampleInput" name="companyname" value={formData.companyname} onChange={handleInputChange} placeholder="Company Name" />
                <input type="text" class="cogform1" id="formGroupExampleInput" name="qualification" value={formData.qualification} onChange={handleInputChange} placeholder="Qualification Required" />
                <input type="text" class="cogform1" id="formGroupExampleInput" name="contactnumber" value={formData.contactnumber} onChange={handleInputChange} placeholder="Contact Number" />
                <input type="text" class="cogform1" id="formGroupExampleInput" name="position" value={formData.position} onChange={handleInputChange} placeholder="Position Name" />
                <input type="text" class="cogform1" id="formGroupExampleInput" name="skills" value={formData.skills} onChange={handleInputChange} placeholder="Skills Required" />
                <input type="text" class="cogform1" id="formGroupExampleInput" name="jd" value={formData.jd} onChange={handleInputChange} placeholder="Job Description" />
                <input type="text" class="cogform1" id="formGroupExampleInput" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email ID" />
                <input type="text" class="cogform1" id="formGroupExampleInput" name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" />
                <input type="text" class="cogform1" id="formGroupExampleInput" name="interesteddomain" value={formData.interestedinternship} onChange={handleInputChange} placeholder="Interested Domain" />
                <label class="form-label" id="photolabel" for="customFile">Upload Letter</label>
                <input type="file" class="form-label" id="customFile" />
                <button type="submit" class="signupco1">Post</button>
                <Modal isOpen={open} onClose={handleClose}>
              <>
                <h1 style={{ marginTop: '5rem' }}>New internship Posted Sucessfully!!</h1>
              </>
            </Modal>
                </form>
            </div>
             

        </div>
        <Routes>
        <Route path="/companyprofilepage" element={<CompanyProfilePage />} />
      </Routes>
    </div>
  );
}

export default CompanyNewInternship;
