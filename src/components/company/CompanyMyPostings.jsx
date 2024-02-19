import React, { useState, useEffect } from "react";
import Header1 from "../general/Header1";
import CompanyInternshipWhoApplied from "./CompanyInternshipWhoApplied";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function CompanyMyPostings() {
    const email = Cookies.get('email');
    console.log("Retrieved email as: " + email);

    
    const [internshipDetails, setInternshipDetails] = useState([]);

    useEffect(() => {
        // Fetch company's own details from the API
        fetch(`http://localhost:5000/internship/company/${email}`)  //select only my postings
            .then(response => response.json())
            .then(data => {
                // Assign the fetched data to the internshipDetails variable
                setInternshipDetails(data);
                console.log(internshipDetails)
            })
            .catch(error => console.error('Error fetching internship details for company:', error));
    }, []); // Empty dependency array to fetch data only once when the component mounts

    const navigate = useNavigate();
    const navigateToCompanyInternshipWhoApplied = (internship) => {
        console.log('Passing the object' + internship + 'to candidatewhoapplied')
        navigate('/companyinternshipwhoapplied', { state: { internship } });
    }

    return (
        <div>
            <Header1 />
            <h1 id="Exploreh1">My Postings</h1>
            <div id="ExploreContainer">
                {internshipDetails.map(internship =>

                    <div key={internship.email} className="studentDetailsContainer">


                        <div id="ExploreImage">
                            <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn" width="100%" alt="" />
                            <button type="button" class="btn btn-info" id="DetailsButton" onClick={() => navigateToCompanyInternshipWhoApplied(internship)}>Applications</button>
                        </div>
                        <div id="ExploreContent">


                            <h2>{internship.position_name}</h2>
                            <h4>{internship.skills_required}</h4>
                            <h6>{internship.job_description}</h6>
                            {/* {company.contact_no}  {company.qualification_required}  {company.skills_required} 
                            {company.email}  {company.locations}  {company.interested_domain} */}

                        </div>

                    </div>

                )}
            </div>
            <Routes>
                <Route path="/companyinternshipwhoapplied" element={<CompanyInternshipWhoApplied />} />
            </Routes>

        </div>
    )

}
export default CompanyMyPostings;