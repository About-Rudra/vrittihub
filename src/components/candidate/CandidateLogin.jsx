import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CandidateProfilePage from "./CandidateProfilePage";
import Cookies from 'js-cookie';
import Modal from "../general/Modal";
import Modal2 from "../general/Modal2";

function CandidateLogin() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',

  });
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };  
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleOpen1 = () => {
    setOpen1(true);
  };

  

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Submit event fired: ', JSON.stringify(formData));
    if (Object.values(formData).some(value => value.trim() === '')) {
      // At least one field is empty, display error message or prevent navigation
      alert('Please fill out all fields');
      return; // Exit early, don't proceed to next page
    }else {
      console.log("yes user found in database")
    handleOpen();
    setTimeout(() => {
      navigateToCandidateProfilePage();
      }, 1000);
    // alert('candidate present')
      
    }

    // Process the form data (e.g., send it to the server)
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log('Received response:', response);
        if(response.ok) {
          // Set the email id in a cookie
          Cookies.set('email', formData.email);
          Cookies.set('role', "candidate");
         
        } else  {
          console.log("Error received from backend: " + response.status);
          handleOpen1();
          setOpen(false)
        }
        
        // Reset form fields
        setFormData({ email: '', password: '' });
      })
      .catch((error) => {
        console.error('Error posting data:', error);
        // Optionally, handle error
      });

    console.log('Form submitted:', formData);
    
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
  function navigateToCandidateSignup(){
    navigate('/candidatesignup')
  }
  function navigateToCompanyLogin(){
    navigate('/companylogin')
  }

  return (
    <div id="signupCoContainer">
      <div id="right">

        <h1>Signed Already?
          <br />Login:) </h1>
        <a href="#" onClick={navigateToCandidateSignup}>Dont have an account? Signup :)</a>
        <br />
        <a href="#" onClick={navigateToCompanyLogin}>Are you a Recruiter?</a>
      </div>

      <div id="signupCoForm">
        <div class="rectangle1"></div>
        <div class="rectangle2"></div>


        <div class="signupCogroup">
          <h2 id="head1">Candidate Login</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" class="cogform" aria-describedby="cemail" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
            <input type="password" class="cogform" aria-describedby="cpass" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
            <button type="submit" class="signupco" >Log in</button>
            <Modal isOpen={open} onClose={handleClose}>
              <>
                <h1 style={{ marginTop: '5rem' }}>Successfully Logged in!!</h1>
              </>
            </Modal>
            <Modal2 isOpen={open1} onClose={handleClose1}>
              <>
                <h1 style={{ marginTop: '3rem' }}>Candidate not registered :(</h1>
              </>
            </Modal2>
          </form>
        </div>


      </div>
      <Routes>
        <Route path="/candidateprofilepage" element={<CandidateProfilePage />} />
      </Routes>
    </div>
  );
}

export default CandidateLogin;
