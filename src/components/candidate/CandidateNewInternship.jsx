import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

function CandidateNewInternship() {
  const [formData, setFormData] = useState({
    studentname: '',
    qualification: '',
    email: '',
    skills: '',
    collegename: '',
    bio: '',
    contactno: '',
    interestedinternship: ''
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Submit event fired: ', JSON.stringify(formData));

    // Process the form data (e.g., send it to the server)
    fetch('http://localhost:5000/applyforinternship', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log('Data posted successfully:', response);
        // Optionally, update UI based on response
      })
      .catch((error) => {
        console.error('Error posting data:', error);
        // Optionally, handle error
      });

    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({ studentname: '', qualification: '', email: '', skills: '', bio: '', contactno: '', interestedinternship: '', collegename: '' });
  };

  // Function to handle input changes and update state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div id="signupCoContainer">
        <div id="right">
            
            <h1><br />Post New Internship :) </h1>
         </div>

         <div id="signupCoForm1">
            <div class="rectangle11"></div>
            <div class="rectangle22"></div>
            
            
            <div class="signupCogroup1">
                <h2 id="head1">Internship Details</h2>
                <form onSubmit={handleSubmit}>
                <input type="text" class="cogform1" id="formGroupExampleInput" name="studentname" value={formData.studentname} onChange={handleInputChange} placeholder="Student Name" />
                <input type="text" class="cogform1" id="formGroupExampleInput" name="qualification" value={formData.qualification} onChange={handleInputChange} placeholder="Qualification " />
                <input type="text" class="cogform1" id="formGroupExampleInput" name="contactno" value={formData.contactno} onChange={handleInputChange} placeholder="Contact Number" />
                <input type="text" class="cogform1" id="formGroupExampleInput" name="collegename" value={formData.collegename} onChange={handleInputChange} placeholder="School/College Name" />
                <input type="text" class="cogform1" id="formGroupExampleInput" name="skills" value={formData.skills} onChange={handleInputChange} placeholder="Skills/ Acheivements " />
                <input type="text" class="cogform1" id="formGroupExampleInput" name="bio" value={formData.bio} onChange={handleInputChange} placeholder="Bio" />
                <input type="text" class="cogform1" id="formGroupExampleInput" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email ID" />
                <input type="text" class="cogform1" id="formGroupExampleInput" name="locations" value={formData.locations} onChange={handleInputChange} placeholder="Location" />
                <input type="text" class="cogform1" id="formGroupExampleInput" name="interestedinternship" value={formData.interestedinternship} onChange={handleInputChange} placeholder="Where do u want internship?" />
                <label class="form-label" id="photolabel" for="customFile">Upload CV</label>
                <input type="file" class="form-label" id="customFile" />
                <button type="submit" class="signupco1">Post</button>
                </form>
            </div>
             

        </div>
    </div>
  );
}

export default CandidateNewInternship;