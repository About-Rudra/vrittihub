import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { X } from "@mui/icons-material";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from "./Home";
import AboutUs from "./AboutUs";
import CandidateExplorePage from "../candidate/CandidateExplorePage";
import Cookies from "js-cookie";
import CompanyMyPostings from "../company/CompanyMyPostings";

function Header() {
  const navigate = useNavigate();

  function navigateToHome() {
    navigate('/')
  }
  function navigateToAboutUs() {
    navigate('/aboutus')
  }
  function navigateToExplorePage() {
    const role = Cookies.get('role')
  console.log(role)
  if(role === 'company'){
    navigate('/explorecompany')
  }else{
    navigate('/explorecandidate')
  }
  }

  

  return (
    <header>
      <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "#2a3240" }}>

        <div class="headerFlex">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand1" href="#" style={{ textDecoration: "none" }} onClick={navigateToHome}>Home </a>
            <a class="navbar-brand1" href="#" style={{ textDecoration: "none" }} onClick={navigateToAboutUs}>About</a>
            <a class="navbar-brand1" href="#" style={{ textDecoration: "none" }} onClick={navigateToExplorePage}>Explore</a>
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
        <Route path="/explorecandidate" element={<CandidateExplorePage />} />
        <Route path="/explorecompany" element={<CompanyMyPostings />} />
      </Routes>
    </header>
  );
}

export default Header;
