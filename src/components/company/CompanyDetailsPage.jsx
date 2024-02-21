import React, { useState, useEffect } from 'react';
import Header from "../general/Header";
import CompanyDetailsProfileProps from "./CompanyMyPostings";
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
//import CompanyDetailsEntry from "../company/CompanyDetailsEntry";


function CompanyDetailsPage() {

    // const email = Cookies.get('email');
    // console.log("Retrieved email as: " + email);
    const location = useLocation();
    

    const { studentApplicationDetails } = location.state;
    console.log("this is student" + studentApplicationDetails); // Check the contents of the student object

    // const [companyDetails, setCompanyDetails] = useState([]);

    // useEffect(() => {
    //     // Fetch student details from the API
    //     fetch(`http://localhost:5000/companydetails/${email}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             // Assign the fetched data to the studentDetails variable
    //             setCompanyDetails(data);
    //             console.log(companyDetails)
    //         })
    //         .catch(error => console.error('Error fetching student details:', error));
    // }, []); // Empty dependency array to fetch data only once when the component mounts

    return (
        <div>
            <Header />
            <div id="CDPContainer">

                <div class="CDP">
                    <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn" height="80%" width="100%" alt="" />
                </div>
                <div class="CDP">
                    <div class="profileText">
                        {/* {companyDetails ? ( */}
                            <div>

                                {/* //instead of studentdetails take company details and change the title  pass the object here */}

                                <h1>I'm {studentApplicationDetails.student_name}!</h1>
                                <p><strong style={{fontSize:'1.2rem'}}>JD:</strong> {studentApplicationDetails.bio}</p>
                                <p><strong style={{fontSize:'1.2rem'}}>Qualification: </strong>{studentApplicationDetails.qualification}</p>
                                <p><strong style={{fontSize:'1.2rem'}}>Contact Number: </strong>{studentApplicationDetails.contact_no}</p>
                                <p><strong style={{fontSize:'1.2rem'}}>Position Name: </strong>{studentApplicationDetails.position_name}</p>
                                <p><strong style={{fontSize:'1.2rem'}}>Skills : </strong>{studentApplicationDetails.skills_achievements}</p>
                                <p><strong style={{fontSize:'1.2rem'}}>Email id: </strong>{studentApplicationDetails.email}</p>
                                <p><strong style={{fontSize:'1.2rem'}}>location: </strong>{studentApplicationDetails.locations}</p>
                                <p><strong style={{fontSize:'1.2rem'}}>Work Domain: </strong>{studentApplicationDetails.where_internship}</p>
                            </div>
                        {/* ) : ( */}
                            {/* <p>No student details available</p> */}
                        
                    </div>

                   
                </div>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

            </div>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </div>


    );
}

export default CompanyDetailsPage;
