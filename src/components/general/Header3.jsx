import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { X } from "@mui/icons-material";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from "./Home";
import AboutUs from "./AboutUs";
import Cookies from "js-cookie";
import CompanyMyPostings from "../company/CompanyMyPostings";


function Header3() {
  const navigate = useNavigate();

  function navigateToHome(){
    navigate('/home')
}
function navigateToAboutUs(){
  navigate('/aboutus')
}
function navigateToMypostings(){
  navigate('/companymypostings')
}



  return (
    <header>
     <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#2a3240"}}>
        
        <div class="headerFlex">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand1" href="#" style={{textDecoration: "none"}} onClick={navigateToHome}>Home </a>
                <a class="navbar-brand1" href="#" style={{textDecoration: "none"}} onClick={navigateToAboutUs}>About</a>
                <a class="navbar-brand1" href="#" style={{textDecoration: "none", width:'9rem'}} onClick={navigateToMypostings}> My Postings</a>
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
                <Route path="/companymypostings" element={<CompanyMyPostings />} />
                
            </Routes>
    </header>
  );
}

export default Header3;
