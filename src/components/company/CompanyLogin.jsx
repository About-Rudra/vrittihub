import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CompanyDetailsPage from "./CompanyDetailsPage";
import CompanyProfilePage from "./CompanyProfilePage";
import Cookies from 'js-cookie';
import Modal from "../general/Modal";

function CompanyLogin() {
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
    fetch('http://localhost:5000/login2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log('Received response:', response);
        if (response.ok) {
          // Set the email id in a cookie
          Cookies.set('email', formData.email);
          setTimeout(() => {
            navigateToCompanyProfilePage();
          }, 2000);

        } else {
          console.log("Error received from backend: " + response.status);
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
  function navigateToCompanyProfilePage() {
    navigate('/companyprofilepage')
  }

  return (
    <div id="signupCoContainer">
      <div id="right">

        <h1>Signed Already?
          <br />Login:)</h1>
        <a href="#">Dont have an account? Signup :)</a>
        <br />
        <a href="#">Are you a Candidate?</a>
      </div>

      <div id="signupCoForm">
        <div class="rectangle1"></div>
        <div class="rectangle2"></div>


        <div class="signupCogroup">
          <h2 id="head1">Company Login</h2>
          <form onSubmit={handleSubmit}>
            <label for="coemail"></label>
            <input type="email" class="cogform" aria-describedby="cemail" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
            <label for="copass"></label>
            <input type="password" class="cogform" aria-describedby="cpass" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
            <button type="submit" class="signupco">Submit</button>
            <Modal isOpen={open} onClose={handleClose}>
              <>
                <h1 style={{ marginTop: '5rem' }}>Successfully Logged in!!</h1>
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

export default CompanyLogin;
