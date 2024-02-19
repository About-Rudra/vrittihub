import React, { useState, useEffect } from "react";
import Header1 from "../general/Header1";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import CandidateDetailsPage from "../candidate/CandidateDetailsPage";
import { useLocation } from 'react-router-dom';
import Header3 from "../general/Header3";

function CompanyInternshipWhoApplied() {

    const location = useLocation();
    

    const { internship } = location.state;
    console.log("this is internship object" + internship);

    const email = Cookies.get('email');
    console.log("Retrieved email as: " + email);

    const [applications, setApplicationsDetails] = useState([]);

    useEffect(() => {
        // Fetch student details who applied for the internship from the API
        fetch(`http://localhost:5000/internship-application/${internship.internship_id}`) //change the url 
            .then(response => response.json())
            .then(data => {
                // Assign the fetched data to the studentDetails variable
                setApplicationsDetails(data);
                console.log(applications)
            })
            .catch(error => console.error('Error fetching student details:', error));
    }, []); // Empty dependency array to fetch data only once when the component mounts

    const navigate = useNavigate();
    const navigateToCandidateDetailsPage = (application) => {
        navigate('/CandidateDetailsView', { state: { application } });
    }

    return (
        <div>
            <Header3 />

            <h1 id="Exploreh1">Students Who applied</h1>
            <div id="ExploreContainer">
                {applications.map(application =>
                    <div key={application.email} className="studentDetailsContainer">

                        <div id="ExploreImage">
                            <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn" width="100%" alt="" />
                            <button type="button" class="btn btn-info" id="DetailsButton" onClick={() => navigateToCandidateDetailsPage(application)}>Details</button>
                        </div>

                        <div id="ExploreContent" >
                            <h2>{application.student_name}</h2>
                            <h4>{application.qualification}</h4>
                            <h6>{application.bio}</h6>
                            {/* {student.contact_no}  {student.college_name}  {student.skills_achievements} 
                            {student.email}  {student.locations}  {student.where_internship}                                       */}
                        </div>
                    </div>
                )}
            </div>

            <Routes>
                <Route path="/CandidateDetailsView" element={<CandidateDetailsPage />} />
            </Routes>

        </div>
    )

}
export default CompanyInternshipWhoApplied;