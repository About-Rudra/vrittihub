import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CandidateDetailsForm from "./CandidateDetailsForm";

function CandidateSignup() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Submit event fired: ', JSON.stringify(formData));

    // Process the form data (e.g., send it to the server)
    fetch('http://localhost:5000/register', {
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
    setFormData({  email: '', password: ''});
  };

  // Function to handle input changes and update state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const navigate = useNavigate();
  function navigateToCandidateDetailsForm(){
    navigate('/candidatedetails')
}

  return (
    <div id="signupCoContainer">
        <div id="right">
            
            <h1>New Here?
                <br />Sign up:) </h1>
         </div>

         <div id="signupCoForm">
            <div class="rectangle1"></div>
            <div class="rectangle2"></div>
            
            
            <div class="signupCogroup">
                <h2 id="head1">Candidate Sign Up</h2>
                <form onSubmit={handleSubmit}>
                <label for="coemail"></label>
                <input type="email" class="cogform"  aria-describedby="cemail" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
                <label for="copass"></label>
                <input type="password" class="cogform"  aria-describedby="cpass" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
                
                <button type="submit" class="signupco" >Submit</button>
                <button type="button" class="google-sign-in-button" >
                    Sign in with Google
                  </button>
                </form>
            </div>
             

        </div>
          <Routes>
              <Route path="/candidatedetails" element={<CandidateDetailsForm />} />
          </Routes>
    </div>
  );
}

export default CandidateSignup;
