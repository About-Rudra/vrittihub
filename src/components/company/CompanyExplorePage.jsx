import React, { useState, useEffect } from "react";
import Header1 from "../general/Header1";
import CandidateDetailsPage from "../candidate/CandidateDetailsPage";
import { Routes, Route, useNavigate } from 'react-router-dom'; 
import Cookies from 'js-cookie';



function CompanyExplorePage(){

    const email = Cookies.get('email');
    console.log("Retrieved email as: " + email);

    const [studentDetails, setStudentDetails] = useState([]);

    useEffect(() => {
        // Fetch student details from the API
        fetch(`http://localhost:5000/getappliedinternshipinfo`) 
            .then(response => response.json())
            .then(data => {
                // Assign the fetched data to the studentDetails variable
                setStudentDetails(data);
                console.log(studentDetails)
            })
            .catch(error => console.error('Error fetching student details:', error));
    }, []); // Empty dependency array to fetch data only once when the component mounts

    const navigate = useNavigate();
    const navigateToCandidateDetailsPage = (student) => {
        navigate('/candidatedetailsview', { state: { student } });
    }
    return(
        <div>
            <Header1 />
            {/* {CompanyDetailsEntry.map(renderEntry)} */}
            <h1 id="Exploreh1">Explore</h1>
            <div id="ExploreContainer">
            {studentDetails.map(student =>
            <div key={student.email} className="studentDetailsContainer">
                
                    <div id="ExploreImage">
                    <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn" width="100%" alt="" />
                    <button type="button" class="btn btn-info" id="DetailsButton" onClick={() => navigateToCandidateDetailsPage(student)}>Details</button>
                </div>
                
                <div id="ExploreContent" >                            
                        <h2>{student.student_name}</h2>
                            <h4>{student.qualification}</h4>
                            <h6>{student.bio}</h6>  
                            {student.contact_no}  {student.college_name}  {student.skills_achievements} 
                            {student.email}  {student.locations}  {student.where_internship}                                      
                </div>
                </div>
                )}
            </div>
           
            <Routes>
                <Route path="/candidatedetailsview" element={<CandidateDetailsPage />} />
            </Routes>
    </div>
    );
   
}
export default CompanyExplorePage;