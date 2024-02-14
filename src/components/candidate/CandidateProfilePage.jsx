import React, { useState, useEffect } from 'react';
import Header from "../general/Header";
import CandidateDetailsProps from "./CandidateDetailsProps";
import CandidateDetailsEntry from "../candidate/CandidateDetailsEntry";
import InviteModal from "../general/InviteModal";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CandidateNewInternship from "./CandidateNewInternship";
import Cookies from 'js-cookie';

// function renderEntry(detail){
//     return(
//         <CandidateDetailsProps 
//             key={detail.id}
//             candidateName={detail.candidateName}
//             qualification={detail.qualification}
//             contactNumber={detail.contactNumber}
//             collegeName={detail.collegeName}
//             skillsAcheivements={detail.skillsAcheivements}
//             bio={detail.bio}
//             emailid={detail.emailid}
//             location={detail.location}
//             interests={detail.interests}
//         />
//     );
// }


function CandidateProfilePage() {

    const email = Cookies.get('email');
    console.log("Retrieved email as: " + email);

    const [studentDetails, setStudentDetails] = useState([]);

    useEffect(() => {
        // Fetch student details from the API
        fetch(`http://localhost:5000/studentprofilepage/${email}`)
            .then(response => response.json())
            .then(data => {
                // Assign the fetched data to the studentDetails variable
                setStudentDetails(data);
                console.log(studentDetails)
            })
            .catch(error => console.error('Error fetching student details:', error));
    }, []); // Empty dependency array to fetch data only once when the component mounts




    const navigate = useNavigate();

    function navigateToCandidateNewInternship(){
        navigate('/candidatenewinternship')
    }

  return (
    <div>
        <Header />
        <div id="CDPContainer">
        
        <div className="CDP">
            <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn" height="80%" width="100%" alt="" />
        </div>
        <div className="CDP">
            <div className="ProfileButtons">
                <button type="button" className="btn btn-primary" id="InviteButton" data-toggle="modal" data-target="#exampleModalLong" >Invite</button>
                <button type="button" className="btn btn-primary" id="RequestButton">Request</button>
                <InviteModal />
            </div>
            

            <div className="profileText">
            {/* {CandidateDetailsEntry.map(renderEntry)} */}
            <h1>email id: {}</h1>
            </div>

            <button type="submit" className="btn btn-primary" id="submitButton" >Edit</button>
            <button type="submit" className="btn btn-primary" id="PostNewButton" onClick={navigateToCandidateNewInternship}>Post New Internship</button>
        </div>
         
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            <Routes>
                <Route path="/candidatenewinternship" element={<CandidateNewInternship />} />
            </Routes>
    </div>
  );
}

export default CandidateProfilePage;
