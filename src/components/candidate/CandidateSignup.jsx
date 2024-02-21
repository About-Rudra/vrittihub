import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CandidateDetailsForm from "./CandidateDetailsForm";
import Cookies from 'js-cookie';
import Modal from "../general/Modal";

function CandidateSignup() {
  const [open, setOpen] = useState(false);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit event fired: ', JSON.stringify(formData));
    console.log(formData);
    if (Object.values(formData).some(value => value.trim() === '')) {
      alert('Please fill out all fields');
      return;
    }else{
      handleOpen();
    }

    fetch("http://localhost:5000/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log('Received response:', response);
        console.log("Email used for registration: " + formData.email);
        
        if(response.ok) {
          console.log("All Ok");
          Cookies.set('email', formData.email);
          Cookies.set('role', "candidate");
          
          setTimeout(() => {
            navigateToCandidateDetailsForm();
          }, 1000);
        } else {
          if(response.status === 400) {
            alert('User already present');
            console.log("Received bad request from backend");
          } else {
            console.log("Backend error: " + response.status);
          }
        }
        
        setFormData({ email: '', password: '' });
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const navigate = useNavigate();
  
  function navigateToCandidateDetailsForm() {
      navigate('/candidatedetails')
  }


  return (
    <div id="signupCoContainer">
      <div id="right">
        <h1>New Here?<br />Sign up:) </h1>
      </div>
      <div id="signupCoForm">
        <div className="rectangle1"></div>
        <div className="rectangle2"></div>
        <div class="signupCogroup">
          <h2 id="head1">Candidate Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label></label>
            <input type="email" className="cogform" aria-describedby="cemail" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
            <label></label>
            <input type="password" className="cogform" aria-describedby="cpass" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
            <button type="submit" className="signupco" >Next</button>
            <Modal isOpen={open} onClose={handleClose}>
                <>
                    <h1 style={{ marginTop: '5rem' }}>Successfully Signed in!!</h1>
                </>
            </Modal>
            <button type="button" className="google-sign-in-button" >
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
