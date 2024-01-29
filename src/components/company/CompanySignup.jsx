import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CompanyDetailsForm from "./CompanyDetailsForm";

function CompanySignup() {
    const navigate = useNavigate();

    function navigateToCompanyDetailsForm(){
        navigate('/companydetails')
    }
    return (

        <div id="signupCoContainer" >
            <div id="right">

                <h1>New Here?
                    <br />Sign up:) </h1>
            </div>

            <div id="signupCoForm">
                <form>
                    <div class="rectangle1"></div>
                    <div class="rectangle2"></div>


                    <div class="signupCogroup">
                        <h2 id="head1">Company Sign Up</h2>
                        <label for="coemail"></label>
                        <input type="email" class="cogform" aria-describedby="cemail" placeholder="Email" />
                        <label for="copass"></label>
                        <input type="password" class="cogform" aria-describedby="cpass" placeholder="Password" />

                                <button type="submit" class="signupco" onClick={navigateToCompanyDetailsForm}>Submit</button>
                                <button type="button" class="google-sign-in-button" >
                                    Sign in with Google
                                </button>
                    </div>


                        </form>
                    </div>
                    <Routes>
                         <Route path="/companydetails" element={<CompanyDetailsForm />} />
                    </Routes>
            </div>
            
            );
}

            export default CompanySignup;
