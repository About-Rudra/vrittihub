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
    

    const { company } = location.state;
    console.log("this is student" + company); // Check the contents of the student object

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
                                <h1>We Are' {company.company_name}!</h1>
                                <p>JD: {company.job_description}</p>
                                <p>Qualification Required: {company.qualification_required}</p>
                                <p>Contact Number: {company.contact_no}</p>
                                <p>Position Name: {company.position_name}</p>
                                <p>Skills Required: {company.skills_required}</p>
                                <p>Email id: {company.email}</p>
                                <p>location: {company.locations}</p>
                                <p>Work Domain: {company.interested_domain}</p>
                            </div>
                        {/* ) : ( */}
                            {/* <p>No student details available</p> */}
                        
                    </div>

                    <button type="submit" class="btn btn-primary" id="submitButton" >Send Invite</button>
                </div>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

            </div>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </div>


    );
}

export default CompanyDetailsPage;
