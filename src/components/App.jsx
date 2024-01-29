import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./general/Home";
import AboutUs from "./general/AboutUs";
import ForgotPass from "./general/ForgotPass";
import AreUA from "./general/AreUA";
import CompanySignup from "./company/CompanySignup";
import CandidateSignup from "./candidate/CandidateSignup";
import CompanyLogin from "./company/CompanyLogin";
import CandidateLogin from "./candidate/CandidateLogin";
import CompanyDetailsForm from "./company/CompanyDetailsForm";
import CandidateDetailsForm from "./candidate/CandidateDetailsForm";
import CompanyDetailsPage from "./company/CompanyDetailsPage";
import CandidateDetailsPage from "./candidate/CandidateDetailsPage";
import CompanyProfilePage from "./company/CompanyProfilePage";
import CandidateProfilePage from "./candidate/CandidateProfilePage";
import CompanyNewInternship from "./company/CompanyNewInternship";
import CandidateNewInternship from "./candidate/CandidateNewInternship";
import AreUALogin from "./general/AreUALogin";
import CompanyExplorePage from "./company/CompanyExplorePage";
import CandidateExplorePage from "./candidate/CandidateExplorePage";
import CompanyInvites from "./company/CompanyInvites";
import CompanyRequests from "./company/CompanyRequests";
import CandidatesInvites from "./candidate/CandidateInvites";
import CandidatesRequests from "./candidate/CandidatesRequests";


// import { BrowserRouter as Router } from 'react-router-dom';

//import ReactDOM from "react-dom";

function App() {
  return (
    
    
    
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/forgotpassword" element={<ForgotPass />} />
        <Route path="/AreUA" element={<AreUA />} />
        <Route path="/CompanySignup" element={<CompanySignup />} />
        <Route path="/CandidateSignup" element={<CandidateSignup />} />
        <Route path="/CompanyLogin" element={<CompanyLogin />} />
        <Route path="/CandidateLogin" element={<CandidateLogin />} />
        <Route path="/CompanyDetails" element={<CompanyDetailsForm />} />
        <Route path="/CandidateDetails" element={<CandidateDetailsForm />} />
        <Route path="/CompanyDetailsView" element={<CompanyDetailsPage />} />
        <Route path="/CandidateDetailsView" element={<CandidateDetailsPage />} />
        <Route path="/CompanyProfilePage" element={<CompanyProfilePage />} />
        <Route path="/CandidateProfilePage" element={<CandidateProfilePage />} />
        <Route path="/CandidateNewInternship" element={<CandidateNewInternship />} />
        <Route path="/CompanyNewInternship" element={<CompanyNewInternship/>} />
        <Route path="/areualogin" element={<AreUALogin/>} />
        <Route path="/explorecompany" element={<CompanyExplorePage/>} />
        <Route path="/explorecandidate" element={<CandidateExplorePage/>} />
        <Route path="/companyinvites" element={<CompanyInvites/>} />
        <Route path="/companyrequests" element={<CompanyRequests/>} />
        <Route path="/candidateinvites" element={<CandidatesInvites/>} />
        <Route path="/candidaterequests" element={<CandidatesRequests/>} />
      </Routes>
    
    
     
    
    
  );
  
}

export default App;



// rendering name on login
// import React, { useState } from "react";

// function App() {
//   const [name, tname] = useState("");
//   const [lastName, lname] = useState("");
//   const [newName, dispname] = useState("");
//   const [newlName, displname] = useState("");

//   function handleEvent(event) {
//     console.log(event.target.value);
//     tname(event.target.value);
//   }
//   function handleEvent1(event) {
//     console.log(event.target.value);
//     lname(event.target.value);
//   }
//   function clickEvent() {
//     dispname(name);
//     console.log(name);
//     displname(lastName);
//     console.log(lastName);
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {newName} {newlName}
//       </h1>
//       <input
//         onChange={handleEvent}
//         type="text"
//         placeholder="What's your name?"
//       />
//       <input
//         onChange={handleEvent1}
//         type="text"
//         placeholder="What's your last name?"
//       />
//       <button onClick={clickEvent}>Submit</button>
//     </div>
//   );
// }

