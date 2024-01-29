import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CompanyProfilePage from "./CompanyProfilePage";

function CompanyDetailsForm() {

  const navigate = useNavigate();

  function navigateToCompanyProfilePage(){
    navigate('/companyprofilepage')
}

  return (
    <div id="signupCoContainer">
    <div id="right">
        
        <h1><br />Company Details:) </h1>
     </div>

     <div id="signupCoForm1"><form>
        <div class="rectangle11"></div>
        <div class="rectangle22"></div>
        
        
        <div class="signupCogroup1">
            <h2 id="head1">Company/Organizational Details</h2>
            <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Company Name" />
            <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Qualification Required" />
            <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Contact Number" />
            <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Position Name" />
            <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Skills Required" />
            <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Job Description" />
            <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Email ID" />
            <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Location" />
            <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Interested Domain" />
            <label class="form-label" id="photolabel" for="customFile">Upload Photo</label>
            <input type="file" class="form-label" id="customFile" />
            <button type="submit" class="signupco1" onClick={navigateToCompanyProfilePage}>Submit</button>
        </div>
         

    </form></div>
    <Routes>
                <Route path="/Companyprofilepage" element={<CompanyProfilePage />} />
            </Routes>
</div>
  );
}

export default CompanyDetailsForm;
