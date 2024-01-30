import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CompanyProfilePage from "./CompanyProfilePage";

function CompanyDetailsForm() {

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

    fetch('http://localhost:5000/companydetails', {
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
  };

  const navigate = useNavigate();
  function navigateToCompanyProfilePage(){
    navigate('/companyprofilepage')
}

  return (
    <div id="signupCoContainer">
    <div id="right">
        
        <h1><br />Company Details:) </h1>
     </div>

     <div id="signupCoForm1">
        <div class="rectangle11"></div>
        <div class="rectangle22"></div>
        
        
        <div class="signupCogroup1">
            <h2 id="head1">Company/Organizational Details</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" class="cogform1" id="companyname" name="companyname" value={formData.companyname} onChange={handleInputChange} placeholder="Company Name" />
            <input type="text" class="cogform1" id="qualification" name="qualification" value={formData.qualification} onChange={handleInputChange} placeholder="Qualification Required" />
            <input type="text" class="cogform1" id="contactnumber" name="contactnumber" value={formData.contactnumber} onChange={handleInputChange} placeholder="Contact Number" />
            <input type="text" class="cogform1" id="position" name="position" value={formData.position} onChange={handleInputChange} placeholder="Position Name" />
            <input type="text" class="cogform1" id="skills" name="skills" value={formData.skills} onChange={handleInputChange} placeholder="Skills Required" />
            <input type="text" class="cogform1" id="jd" name="jd" value={formData.jd} onChange={handleInputChange} placeholder="Job Description" />
            <input type="text" class="cogform1" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email ID" />
            <input type="text" class="cogform1" id="location" name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" />
            <input type="text" class="cogform1" id="interesteddomain" name="interesteddomain" value={formData.name} onChange={handleInputChange} placeholder="Interested Domain" />
            <label class="form-label" id="photolabel" for="customFile">Upload Photo</label>
            <input type="file" class="form-label" id="customFile" />
            <button type="submit" class="signupco1" >Submit</button>
        </form>
        </div>
         

    </div>
    <Routes>
                <Route path="/Companyprofilepage" element={<CompanyProfilePage />} />
            </Routes>
</div>
  );
}

export default CompanyDetailsForm;
