import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CandidateProfilePage from "./CandidateProfilePage";
import Modal from "../general/Modal";

function CandidateDetailsForm() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    qualification: '',
    email: '',
    skills: '',
    collegename: '',
    achievements: '',
    contactno: '',
    interestedinternship: ''
  });
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Submit event fired: ', JSON.stringify(formData));
    if (Object.values(formData).some(value => value.trim() === '')) {
      // At least one field is empty, display error message or prevent navigation
      alert('Please fill out all fields');
      return; // Exit early, don't proceed to next page
    } else {
      handleOpen();
    }

    // Process the form data (e.g., send it to the server)
    fetch('http://localhost:5000/studentdetails', {
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
    setFormData({ name: '', qualification: '', email: '', skills: '', achievements: '', contactno: '', interestedinternship: '', collegename: '' });
    setTimeout(() => {
      navigateToCandidateProfilePage();
    }, 2000);

  };

  // Function to handle input changes and update state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  function navigateToCandidateProfilePage() {
    navigate('/candidateprofilepage')
  }


  return (
    <div id="signupCoContainer">
      <div id="right">

        <h1><br />Candidate Details:) </h1>
      </div>

      <div id="signupCoForm1">
        <div class="rectangle11"></div>
        <div class="rectangle22"></div>


        <div class="signupCogroup1">
          <h2 id="head1">Candidate Details</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" class="cogform1" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Student Name" />
            <input type="text" class="cogform1" id="qualification" name="qualification" value={formData.qualification} onChange={handleInputChange} placeholder="Qualification " />
            <input type="text" class="cogform1" id="contactno" name="contactno" value={formData.contactno} onChange={handleInputChange} placeholder="Contact Number" />
            <input type="text" class="cogform1" id="collegename" name="collegename" value={formData.collegename} onChange={handleInputChange} placeholder="School/College Name" />
            <input type="text" class="cogform1" id="skills" name="skills" value={formData.skills} onChange={handleInputChange} placeholder="Skills/Acheivements " />
            <input type="text" class="cogform1" id="achievements" name="achievements" value={formData.achievements} onChange={handleInputChange} placeholder="Bio" />
            <input type="text" class="cogform1" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email ID" />
            <input type="text" class="cogform1" id="locations" name="locations" value={formData.locations} onChange={handleInputChange} placeholder="Location" />
            <input type="text" class="cogform1" id="interestedinternship" name="interestedinternship" value={formData.interestedinternship} onChange={handleInputChange} placeholder="Interested Internships" />

            <label class="form-label" id="photolabel" for="customFile">Upload photo</label>
            <input type="file" class="form-label" id="customFile" />

            <button type="submit" class="signupco1">Submit</button>
            <Modal isOpen={open} onClose={handleClose}>
              <>
                <h1 style={{ marginTop: '5rem' }}>Thank you for the details!!</h1>
              </>
            </Modal>
          </form>
        </div>


      </div>
      <Routes>
        <Route path="/candidateprofilepage" element={<CandidateProfilePage />} />
      </Routes>
    </div>
  );
}

export default CandidateDetailsForm;


