import React, { useState, useEffect } from 'react';
import Header from "../general/Header";
import CompanyDetailsProfileProps from "./CompanyDetailsProps";
//import CompanyDetailsEntry from "../company/CompanyDetailsEntry";

function renderEntry(detail){
    return(
        <CompanyDetailsProfileProps 
            key={detail.id}
            companyName={detail.companyName}
            qualificationRequired={detail.qualificationRequired}
            contactNumber={detail.contactNumber}
            positionName={detail.positionName}
            skillsRequired={detail.skillsRequired}
            jd={detail.jd}
            emailid={detail.emailid}
            location={detail.location}
            Domain={detail.dom}
        />
    ) 
}

function CompanyDetailsPage() {

  const [greetings, setGreetings] = useState('');

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(jsondata => setGreetings(jsondata.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
<div>
<Header />
<div id="CDPContainer">
        
        <div class="CDP">
            <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn" height="80%" width="100%" alt="" />
        </div>
        <div class="CDP">
            <div class="profileText">
            From virtihub {greetings}
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
