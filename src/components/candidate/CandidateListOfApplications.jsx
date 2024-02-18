import React, { useState, useEffect } from "react";
import Header1 from "../general/Header1";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import CompanyDetailsPage from "../company/CompanyDetailsPage";

function CandidateListOfApplications(){
    const email = Cookies.get('email');
    console.log("Retrieved email as: " + email);

    const [studentApplicationDetails, setStudentApplicationDetails] = useState([]);

    useEffect(() => {
        // Fetch student details from the API
        //join internship_post table for viewing the company details aswell
        fetch(`http://localhost:5000/internship-application/candidate/${email}`)//url to get internship applied buy the student
            .then(response => response.json())
            .then(data => {
                // Assign the fetched data to the studentapplicationDetails variable
                setStudentApplicationDetails(data);
                console.log(studentApplicationDetails)
            })
            .catch(error => console.error('Error fetching student details:', error));
    }, []); // Empty dependency array to fetch data only once when the component mounts
    const navigate = useNavigate();
    const navigateToCompanyDetailsPage = (student) => {
        navigate('/CompanyDetailsView', { state: { student } });
    }
    return(
<div>
<Header1 />
            
            <h1 id="Exploreh1">My Applications</h1>
            <div id="ExploreContainer">
                {studentApplicationDetails.map(student =>
                
                    <div key={student.email} className="studentDetailsContainer">
                    

                        <div id="ExploreImage">
                            <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn" width="100%" alt="" />
                            <button type="button" class="btn btn-info" id="DetailsButton" onClick={() => navigateToCompanyDetailsPage(student)}>Details</button>
                        </div>
                        <div id="ExploreContent">

                        {/* change to company details rather than student from internship_post */}
                            <h2>{student.student_name}</h2>
                            <h4>{student.qualification}</h4>
                            <h6>{student.contact_no}</h6>
                            {/* {company.contact_no}  {company.qualification_required}  {company.skills_required} 
                            {company.email}  {company.locations}  {company.interested_domain} */}

                        </div>
                       
                    </div>
                    
                )}
            </div>
            <Routes>
                <Route path="/CompanyDetailsView" element={<CompanyDetailsPage />} />
            </Routes>
        
        
    </div>
    )
    
}
export default CandidateListOfApplications;