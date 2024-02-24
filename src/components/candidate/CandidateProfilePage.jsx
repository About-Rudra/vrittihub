import React, { useState, useEffect } from 'react';
import Header from "../general/Header";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CandidateNewInternship from "./CandidateApplyForInternship";
import Cookies from 'js-cookie';
import CandidateListOfApplications from './CandidateListOfApplications';
import EditCandidateDetails from './EditCandidateDetails';

function CandidateProfilePage() {

    const email = Cookies.get('email');
    console.log("Retrieved email as: " + email);

    const [studentDetails, setStudentDetails] = useState([]);

    useEffect(() => {
        // Fetch student details from the API
        fetch(`http://localhost:5000/studentdetails/${email}`)
            .then(response => response.json())
            .then(data => {
                // Assign the fetched data to the studentDetails variable
                setStudentDetails(data);
                console.log(studentDetails)
            })
            .catch(error => console.error('Error fetching student details:', error));
    }, []); // Empty dependency array to fetch data only once when the component mounts




    const navigate = useNavigate();
    function navigateToCandidateListOfApplications(){
        navigate('/candidatelistofapplications')
    }
    function navigateToEditCandidateDetails(){
        navigate('/editcandidatedetails')
    }
    

  return (
    <div>
        <Header />
        <div id="CDPContainer">
        
        <div className="CDP">
            {!studentDetails.profile_photo && <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn" height="80%" width="100%" alt="" /> }
            {studentDetails.profile_photo && <img src={'http://localhost:5000/uploads/' +  studentDetails.profile_photo} height="80%" width="100%" alt=""/>}
        </div>
        <div className="CDP">
            <div className="ProfileButtons">
                <button type="button" className="btn btn-primary" id="InviteButton" onClick={navigateToCandidateListOfApplications}>My Applications</button>
                {/* <button type="button" className="btn btn-primary" id="RequestButton" onClick={navigateToCandidateResponse}>Request</button> */}
                
            </div>
            

            <div className="profileText">
            
            {studentDetails ? (
                            <div>
                                <h1>I'm {studentDetails.name}!</h1>
                                <p>{studentDetails.achievements}</p>
                                <p><strong style={{fontSize:'1.2rem'}}>Qualification:</strong> {studentDetails.qualification}</p>
                                <p><strong style={{fontSize:'1.2rem'}}>Contact Number: </strong>{studentDetails.contact_no}</p>
                                <p><strong style={{fontSize:'1.2rem'}}>College Name: </strong>{studentDetails.college_name}</p>
                                <p><strong style={{fontSize:'1.2rem'}}>Skills/Acheivements: </strong>{studentDetails.skills}</p>
                                <p><strong style={{fontSize:'1.2rem'}}>Email id: </strong>{studentDetails.email}</p>
                                <p><strong style={{fontSize:'1.2rem'}}>Location: </strong>{studentDetails.locations}</p>
                                <p><strong style={{fontSize:'1.2rem'}}>Interests: </strong>{studentDetails.interested_internship}</p>
                            </div>
                        ) : (
                            <p>No student details available</p>
                        )}
            </div>

            <button type="submit" className="btn btn-primary" id="submitButton" onClick={navigateToEditCandidateDetails} >Edit</button>
            {/* <button type="submit" className="btn btn-primary" id="PostNewButton" onClick={navigateToCandidateNewInternship}>Post New Internship</button> */}
        </div>
         
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            <Routes>
                <Route path="/candidatelistofapplications" element={<CandidateListOfApplications />} />
                {/* <Route path="/candidateinvites" element={<CandidateInvites />} />
                <Route path="/candidaterequests" element={<CandidatesRequests />} /> */}
                <Route path="/editcandidatedetails" element={<EditCandidateDetails />} />
            </Routes>
    </div>
  );
}

export default CandidateProfilePage;
