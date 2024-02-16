import React, { useState, useEffect } from "react";
import CompanyDetailsEntry from "../company/CompanyDetailsEntry";
import CandidateExploreProps from "./CandidateExploreProps";
import Header1 from "../general/Header1";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CandidateDetailsPage from "./CandidateDetailsPage";
import Cookies from 'js-cookie';


function CandidateExplorePage() {
    const email = Cookies.get('email');
    console.log("Retrieved email as: " + email);

    const [studentDetails, setStudentDetails] = useState([]);

    useEffect(() => {
        // Fetch student details from the API
        fetch(`http://localhost:5000/studentdetails/${email}`) //change the url get api of apply internship
            .then(response => response.json())
            .then(data => {
                // Assign the fetched data to the studentDetails variable
                setStudentDetails(data);
                console.log(studentDetails)
            })
            .catch(error => console.error('Error fetching student details:', error));
    }, []); // Empty dependency array to fetch data only once when the component mounts

    return (
        <div>
            <Header1 />
            {/* {CompanyDetailsEntry.map(renderEntry)} */}
            <h1 id="Exploreh1">Explore</h1>
            <div id="ExploreContainer">
                <div id="ExploreImage">
                    <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn" width="100%" alt="" />
                    <button type="button" class="btn btn-info" id="DetailsButton">Details</button>
                </div>
                <div id="ExploreContent">
                    {studentDetails ? (
                        <div>
                            <h2>{studentDetails.companyName}</h2>
                            <h4>{studentDetails.positionName}</h4>
                            <h6>{studentDetails.jd}</h6>
                        </div>
                    ) : (
                        <p>No student details available</p>
                    )}


                </div>
            </div>
            <Routes>
                <Route path="/CandidateDetailsPage" element={<CandidateDetailsPage />} />
            </Routes>
        </div>
    );

}
export default CandidateExplorePage;