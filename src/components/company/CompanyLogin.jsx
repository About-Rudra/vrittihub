import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CompanyDetailsPage from "./CompanyDetailsPage";
import CompanyProfilePage from "./CompanyProfilePage";

function CompanyLogin() {

  const navigate = useNavigate();

  function navigateToCompanyProfilePage(){
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

         <div id="signupCoForm"><form>
            <div class="rectangle1"></div>
            <div class="rectangle2"></div>
            
            
            <div class="signupCogroup">
                <h2 id="head1">Company Login</h2>
                <label for="coemail"></label>
                <input type="email" class="cogform"  aria-describedby="cemail" placeholder="Email" />
                <label for="copass"></label>
                <input type="password" class="cogform"  aria-describedby="cpass" placeholder="Password" />
                <button type="submit" class="signupco" onClick={navigateToCompanyProfilePage}>Submit</button>
            </div>
             

        </form></div>
            <Routes>
                <Route path="/companyprofilepage" element={<CompanyProfilePage />} />
            </Routes>
    </div>
  );
}

export default CompanyLogin;
