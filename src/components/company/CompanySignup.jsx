import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CompanyDetailsForm from "./CompanyDetailsForm";
import Cookies from 'js-cookie';
import Modal from "../general/Modal";
import Modal1 from "../general/Modal1";

function CompanySignup() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
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
      // At least one field is empty
      setErrors(prevState => ({
        ...prevState,
        email: formData.email.trim() === '' ? 'Email is required' : '',
        password: formData.password.trim() === '' ? 'Password is required' : '',
      }));
      return; // Exit early, don't proceed to next page
    } else {
      setErrors({
        email: '',
        password: '',
      });
      handleOpen();
    }

    // Process the form data (e.g., send it to the server)
    fetch('http://localhost:5000/register2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log('Received response:', response);
        console.log("Email used for registration: " + formData.email);

        if (response.ok) {
          // Set the email id in a cookie
          console.log("All Ok");
          Cookies.set('email', formData.email);
          Cookies.set('role', "company");

          setTimeout(() => {
            navigateToCompanyDetailsForm();
          }, 1000);
        } else {
          if (response.status === 400) {
            //Bad request - User already exists
            //Show to UI
            handleOpen1();
            setOpen(false);
            console.log("Received bad request from backend");
          } else {
            //Show message to UI to try again
            console.log("Backend error: " + response.status);
          }
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

  function navigateToCompanyDetailsForm() {
    navigate('/companydetails');
  }

  return (
    <div id="signupCoContainer" >
      <div id="right">
        <h1>New Here? <br />Sign up:) </h1>
      </div>

      <div id="signupCoForm">
        <div class="rectangle1"></div>
        <div class="rectangle2"></div>

        <div class="signupCogroup">
          <h2 id="head1">Company Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label for="coemail"></label>
            <input
              type="email"
              class="cogform"
              aria-describedby="cemail"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              style={{ borderColor: errors.email ? 'red' : '' }}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            <label for="copass"></label>
            <input
              type="password"
              class="cogform"
              aria-describedby="cpass"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              style={{ borderColor: errors.password ? 'red' : '' }}
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            <button type="submit" class="signupco" >Next</button>
            <Modal isOpen={open} onClose={handleClose}>
              <>
                <h1 style={{ marginTop: '5rem' }}>Successfully Signed in!!</h1>
              </>
            </Modal>
            <Modal1 isOpen={open1} onClose={handleClose1}>
              <>
                <h1 style={{ marginTop: '5rem' }}>User Already Present :(</h1>
              </>
            </Modal1>
            <button type="button" class="google-sign-in-button" >
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
      <Routes>
        <Route path="/companydetails" element={<CompanyDetailsForm />} />
      </Routes>
    </div>
  );
}

export default CompanySignup;
