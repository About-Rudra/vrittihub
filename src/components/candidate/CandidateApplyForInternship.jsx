import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Modal from "../general/Modal";
import CandidateExplorePage from "./CandidateExplorePage";
import { useLocation } from 'react-router-dom';
import Cookies from "js-cookie";
import Header1 from "../general/Header1";

function CandidateApplyForInternship() {
  const email = Cookies.get('email');
  
  const location = useLocation();
  console.log("This is Intership details" + location.state); 

  const { internship } = location.state;
  
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    internshipid: '',
    studentname: '',
    qualification: '',
    email: '',
    skills: '',
    collegename: '',
    bio: '',
    contactno: '',
    locations: '',
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
    formData.email = Cookies.get('email');
    console.log('cookie is' + email)
    formData.internshipid = internship.internship_id.toString();
    console.log("internship " +  formData.internshipid)
    if (Object.values(formData).some(value => value.trim() === '')) {
      // At least one field is empty, display error message or prevent navigation
      alert('Please fill out all fields');
      return; // Exit early, don't proceed to next page
    } else {
      handleOpen();
    }
    // const email = Cookies.get('email');   //getting email id from cookie
    // console.log("Retrieved email as: " + email);

    // formData.email = email;
   

    // fetching data to apply for the particular internship
    fetch('http://localhost:5000/internship-application', {
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
    setFormData({ studentname: '', qualification: '', skills: '', bio: '', contactno: '', interestedinternship: '', collegename: '', locations:'' });
    setTimeout(() => {
      navigateToexplorecandidate();
    }, 2000);
  }

  // Function to handle input changes and update state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  function navigateToexplorecandidate() {
    navigate('/explorecandidate')
  }

  return (
    <div>
    <Header1/>
    <div id="signupCoContainer">
   
      <div id="right" style={{textAlign:"left"}}>

                                <h1> <strong style={{fontSize:"3rem"}}>We Are'</strong> {internship.company_name}!</h1>
                                <p><strong style={{fontSize:"1.2rem"}}>JD:</strong> {internship.job_description}</p>
                                <p><strong style={{fontSize:"1.2rem"}}>Qualification Required:</strong> {internship.qualification_required}</p>
                                <p><strong style={{fontSize:"1.2rem"}}>Contact Number:</strong> {internship.contact_no}</p>
                                <p><strong style={{fontSize:"1.2rem"}}>Position Name:</strong> {internship.position_name}</p>
                                <p><strong style={{fontSize:"1.2rem"}}>Skills Required:</strong> {internship.skills_required}</p>
                                <p><strong style={{fontSize:"1.2rem"}}>Email id:</strong> {internship.email}</p>
                                <p><strong style={{fontSize:"1.2rem"}}>Location:</strong> {internship.locations}</p>
                                <p><strong style={{fontSize:"1.2rem"}}>Work Domain:</strong> {internship.interested_domain}</p>

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
            <input type="text" class="cogform1" id="formGroupExampleInput" name="locations" value={formData.locations} onChange={handleInputChange} placeholder="Location" />
            <input type="text" class="cogform1" id="formGroupExampleInput" name="interestedinternship" value={formData.interestedinternship} onChange={handleInputChange} placeholder="Where do u want internship?" />
            
            <button type="submit" class="signupco1">Apply for the Internship</button>
            <Modal isOpen={open} onClose={handleClose}>
              <>
                <h1 style={{ marginTop: '5rem' }}>New internship Posted Sucessfully!!</h1>
              </>
            </Modal>
          </form>
        </div>


      </div>
      <Routes>
        <Route path="/explorecandidate" element={<CandidateExplorePage />} />
      </Routes>
    </div>
    </div>
  );
}

export default CandidateApplyForInternship;