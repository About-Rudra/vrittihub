import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CandidateProfilePage from "./CandidateProfilePage";

function CandidateDetailsForm() {
  const navigate = useNavigate();

    function navigateToCandidateProfilePage(){
        navigate('/candidateprofilepage')
    }
  return (
    <div id="signupCoContainer">
        <div id="right">
            
            <h1><br/>Candidate Details:) </h1>
         </div>

         <div id="signupCoForm1"><form>
            <div class="rectangle11"></div>
            <div class="rectangle22"></div>
            
            
            <div class="signupCogroup1">
                <h2 id="head1">Candidate Details</h2>
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Student Name" />
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Qualification " />
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Contact Number" />
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="School/College Name" />
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Skills/Acheivements " />
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Bio" />
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Email ID" />
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Location" />
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Interested Internships" />
                
                <label class="form-label" id="photolabel" for="customFile">Upload photo</label>
                <input type="file" class="form-label" id="customFile" />                
                <button type="submit" class="signupco1" onClick={navigateToCandidateProfilePage}>Submit</button>
            </div>
             

        </form></div>
            <Routes>
                <Route path="/candidateprofilepage" element={<CandidateProfilePage />} />
            </Routes>
    </div>
  );
}

export default CandidateDetailsForm;


