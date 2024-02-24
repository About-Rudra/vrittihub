import React, { useState, useEffect } from 'react';
import Header from "../general/Header";
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import Header3 from '../general/Header3';




// function renderEntry(detail) {
//     return (
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
//     )
// }

function CandidateDetailsPage() {

    const location = useLocation();

    const { application } = location.state;
    console.log("this is student" + application); // Check the contents of the student object


    // const email = Cookies.get('email');
    // const email = Cookies.get('email');
    // console.log("Retrieved email as: " + email);

    // const [studentDetails, setStudentDetails] = useState([]);

    // useEffect(() => {
    //     // Fetch student details from the API
    //     fetch(`http://localhost:5000/studentdetails/${email}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             // Assign the fetched data to the studentDetails variable
    //             setStudentDetails(data);
    //             console.log(studentDetails)
    //         })
    //         .catch(error => console.error('Error fetching student details:', error));
    // }, []); // Empty dependency array to fetch data only once when the component mounts



    return (
        <div>
            <Header3 />
            <div id="CDPContainer">


                <div className="CDP">
                  {!application.profile_photo && <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn" height="80%" width="100%" alt="" />}
                  {application.profile_photo && <img src={'http://localhost:5000/uploads/' +  application.profile_photo} height="80%" width="100%" alt=""/>}
                </div>
                <div className="CDP">


                    <div className="profileText">

                        {/* {CandidateDetailsEntry.map(renderEntry)} */}
                        {/* {studentDetails ? ( */}
                            <div>
                            <h1>I'm {application.student_name}!</h1>
                        <p><strong style={{fontSize:'1.2rem'}}>Bio:</strong> {application.bio}</p>
                        <p><strong style={{fontSize:'1.2rem'}}>Qualification: </strong>{application.qualification}</p>
                        <p><strong style={{fontSize:'1.2rem'}}>Contact Number: </strong>{application.contact_no}</p>
                        <p><strong style={{fontSize:'1.2rem'}}>College Name: </strong>{application.college_name}</p>
                        <p><strong style={{fontSize:'1.2rem'}}>Skills/Achievements: </strong>{application.skills_achievements}</p>
                        <p><strong style={{fontSize:'1.2rem'}}>Email id: </strong>{application.email}</p>
                        <p><strong style={{fontSize:'1.2rem'}}>Location: </strong>{application.locations}</p>
                        <p><strong style={{fontSize:'1.2rem'}}>Interests: </strong>{application.where_internship}</p>
                            </div>
                        {/* ) : ( */}
                           
                        

                    </div>

                    {/* <button type="submit" className="btn btn-primary" id="submitButton" >Send Invite</button> */}
                </div>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>

            </div>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>

        </div>


    );
}

export default CandidateDetailsPage;
