import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { X } from "@mui/icons-material";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from "./Home";
import AboutUs from "./AboutUs";
import Cookies from "js-cookie";
import CompanyProfilePage from "../company/CompanyProfilePage";
import CandidateProfilePage from "../candidate/CandidateProfilePage";
 


function Header1() {
  const navigate = useNavigate();

  function navigateToHome(){
    navigate('/home')
}
function navigateToAboutUs(){
  navigate('/aboutus')
}
function navigateToProfilePage(){
  const role = Cookies.get('role')
  console.log(role)
  if(role === 'company'){
    navigate('/CompanyProfilePage')
  }else{
    navigate('/CandidateProfilePage')
  }
}



  return (
    <header>
     <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#2a3240"}}>
        
        <div class="headerFlex">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand1" href="#" style={{textDecoration: "none"}} onClick={navigateToHome}>Home </a>
                <a class="navbar-brand1" href="#" style={{textDecoration: "none"}} onClick={navigateToAboutUs}>About</a>
                <a class="navbar-brand1" href="#" style={{textDecoration: "none"}} onClick={navigateToProfilePage}>Profile</a>
            </div>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <InstagramIcon />
                <LinkedInIcon />
                <X />
            </div>
        </div>
        
    </nav>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/CompanyProfilePage" element={<CompanyProfilePage />} />
                <Route path="/CandidateProfilePage" element={<CandidateProfilePage />} />
            </Routes>
    </header>
  );
}

export default Header1;
