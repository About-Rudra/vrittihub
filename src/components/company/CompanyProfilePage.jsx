import React, { useState, useEffect } from "react";
import Header from "../general/Header";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CompanyNewInternship from "./CompanyNewInternship";
import Cookies from 'js-cookie';
import CompanyMyPostings from "./CompanyMyPostings";


function CompanyProfilePage() {

    const email = Cookies.get('email');
    console.log("Retrieved email as: " + email);

    const [companyDetails, setCompanyDetails] = useState([]);

    useEffect(() => {
        // Fetch company details from the API
        fetch(`http://localhost:5000/companydetails/${email}`)
            .then(response => response.json())
            .then(data => {
                // Assign the fetched data to the companyDetails variable
                setCompanyDetails(data);
                console.log(companyDetails)
            })
            .catch(error => console.error('Error fetching student details:', error));
    }, []); // Empty dependency array to fetch data only once when the component mounts

    const navigate = useNavigate();
    function navigateToCompanyNewInternship(){
        navigate('/companynewinternship')
    }
    function navigateToMyPostings(){
        navigate('/companymypostings')
    }

  return (
    <div>
    <Header />
        <div id="CDPContainer">
        
        <div class="CDP">
            <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn" height="80%" width="100%" alt="" />
        </div>
        <div class="CDP">
            <div class="ProfileButtons">
                <button type="button" class="btn btn-primary" id="InviteButton" onClick={navigateToMyPostings}>My Postings</button>
                {/* <button type="button" class="btn btn-primary" id="RequestButton" onClick={navigateToCompanyResponse}>My Requests</button> */}
            </div>
            
            <div class="profileText">
            {companyDetails ? (
                            <div>
                                <h1><strong style={{fontSize:"3rem"}}>We Are'</strong> {companyDetails.company_name}!</h1>
                                <p><strong style={{fontSize:"1.5rem"}}>JD: </strong>{companyDetails.job_description}</p>
                                <p><strong style={{fontSize:"1.5rem"}}>Qualification Required: </strong>{companyDetails.qualification_required}</p>
                                <p><strong style={{fontSize:"1.5rem"}}>Contact Number: </strong>{companyDetails.contact_no}</p>
                                <p><strong style={{fontSize:"1.5rem"}}>Position Name: </strong>{companyDetails.position_name}</p>
                                <p><strong style={{fontSize:"1.5rem"}}>Skills Required: </strong>{companyDetails.skills_required}</p>
                                <p><strong style={{fontSize:"1.5rem"}}>Email id: </strong>{companyDetails.email}</p>
                                <p><strong style={{fontSize:"1.5rem"}}>location: </strong>{companyDetails.locations}</p>
                                <p><strong style={{fontSize:"1.5rem"}}>Work Domain: </strong>{companyDetails.interested_domain}</p>
                            </div>
                        ) : (
                            <p>No student details available</p>
                        )}
            </div>

            <button type="submit" class="btn btn-primary" id="submitButton" >Edit</button>
            <button type="submit" class="btn btn-primary" id="PostNewButton" onClick={navigateToCompanyNewInternship}>Post New Internship</button>
        </div>
         
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            <Routes>
                <Route path="/companynewinternship" element={<CompanyNewInternship />} />
                <Route path="/companymypostings" element={<CompanyMyPostings />} />
                {/* <Route path="/candidaterequests" element={<CompanyRequests />} /> */}
            </Routes>
    </div>
  );
}

export default CompanyProfilePage;
