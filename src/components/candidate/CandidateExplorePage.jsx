import React, { useState, useEffect } from "react";
import Header1 from "../general/Header1";
import { Routes, Route, useNavigate } from 'react-router-dom';  
import CompanyDetailsPage from "../company/CompanyDetailsPage";
import Cookies from 'js-cookie';


function CandidateExplorePage() {
    const email = Cookies.get('email');
    console.log("Retrieved email as: " + email);

    const [companyDetails, setCompanyDetails] = useState([]);

    useEffect(() => {
        // Fetch student details from the API
        fetch(`http://localhost:5000/getinternshipinfo`) 
            .then(response => response.json())
            .then(data => {
                // Assign the fetched data to the studentDetails variable
                setCompanyDetails(data);
                console.log(companyDetails)
            })
            .catch(error => console.error('Error fetching student details:', error));
    }, []); // Empty dependency array to fetch data only once when the component mounts
    const navigate = useNavigate();
    function navigateToCompanyDetailsPage(){
        navigate('/CompanyDetailsPage')
    }

    return (
        <div>
            <Header1 />
            {/* {CompanyDetailsEntry.map(renderEntry)} */}
            <h1 id="Exploreh1">Explore</h1>
            <div id="ExploreContainer">
                <div id="ExploreImage">
                    <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn" width="100%" alt="" />
                    <button type="button" class="btn btn-info" id="DetailsButton" onClick={navigateToCompanyDetailsPage}>Details</button>
                </div>
                <div id="ExploreContent">
                    {companyDetails ? (
                        <div>
                            <h2>{companyDetails.company_name}</h2>
                            <h4>{companyDetails.position_name}</h4>
                            <h6>{companyDetails.job_description}</h6>
                        </div>
                    ) : (
                        <p>No student details available</p>
                    )}


                </div>
            </div>
            <Routes>
                <Route path="/CompanyDetailsPage" element={<CompanyDetailsPage />} />
            </Routes>
        </div>
    );

}
export default CandidateExplorePage;