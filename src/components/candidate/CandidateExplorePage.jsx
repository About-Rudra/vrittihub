import React, { useState, useEffect } from "react";
import Header1 from "../general/Header1";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CandidateApplyForInternship from "./CandidateApplyForInternship";
import Cookies from 'js-cookie';


function CandidateExplorePage() {
    const email = Cookies.get('email');
    console.log("Retrieved email as: " + email);

    const [internship, setInternship] = useState([]);

    useEffect(() => {
        // Fetch all interships from the API
        fetch(`http://localhost:5000/internship`)
            .then(response => response.json())
            .then(data => {
                // Assign the fetched data to the internship variable
                setInternship(data);
                console.log(internship)
            })
            .catch(error => console.error('Error fetching student details:', error));
    }, []); // Empty dependency array to fetch data only once when the component mounts
    const navigate = useNavigate();
    const navigateToCandidateApplyForInternship = (internship) => {
        navigate('/candidateapplyforinternship', { state: { internship } });
    }
    

    return (
        <div>
            <Header1 />
            {/* {CompanyDetailsEntry.map(renderEntry)} */}
            <h1 id="Exploreh1">Explore</h1>
            <div id="ExploreContainer">
                {internship.map(internship =>
                
                    <div key={internship.email} className="studentDetailsContainer">
                    

                        <div id="ExploreImage">
                            <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn" width="100%" alt="" />
                            <button type="button" class="btn btn-info" id="DetailsButton" onClick={() => navigateToCandidateApplyForInternship(internship)}>Apply</button>
                        </div>
                        <div id="ExploreContent">


                            <h2>{internship.company_name}</h2>
                            <h4>{internship.position_name}</h4>
                            <h6>{internship.job_description}</h6>
                            {/* {company.contact_no}  {company.qualification_required}  {company.skills_required} 
                            {company.email}  {company.locations}  {company.interested_domain} */}

                        </div>
                       
                    </div>
                    
                )}
            </div>
            <Routes>
                <Route path="/CandidateApplyForInternship" element={<CandidateApplyForInternship />} />
            </Routes>
        </div>
    );

}
export default CandidateExplorePage;