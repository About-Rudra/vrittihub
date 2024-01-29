import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CandidateProfilePage from "./CandidateProfilePage";

function CandidateLogin() {
  const navigate = useNavigate();

  function navigateToCandidateProfilePage(){
    navigate('/candidateprofilepage')
  }

  return (
    <div id="signupCoContainer">
        <div id="right">
            
            <h1>Signed Already?
                <br />Login:) </h1>
                <a href="#">Dont have an account? Signup :)</a>
                <br />
                <a href="#">Are you a Recruiter?</a>
         </div>

         <div id="signupCoForm"><form>
            <div class="rectangle1"></div>
            <div class="rectangle2"></div>
            
            
            <div class="signupCogroup">
                <h2 id="head1">Candidate Login</h2>
                <input type="email" class="cogform"  aria-describedby="cemail" placeholder="Email" />
                <input type="password" class="cogform"  aria-describedby="cpass" placeholder="Password" />
                <button type="submit" class="signupco" onClick={navigateToCandidateProfilePage}>Submit</button>
            </div>
             

        </form></div>
            <Routes>
                <Route path="/candidateprofilepage" element={<CandidateProfilePage />} />
            </Routes>
    </div>
  );
}

export default CandidateLogin;
