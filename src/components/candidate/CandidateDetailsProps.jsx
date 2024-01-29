import React from "react";

function CandidateDetailsProps(props){
    return(
<div>
        <h1>I'm {props.candidateName}!</h1>
        <p>{props.bio}</p>
        <p>Qualification: {props.qualification}</p>
        <p>Contact Number: {props.contactNumber}</p>   
        <p>College Name: {props.collegeName}</p>    
        <p>Skills/Acheivements: {props.skillsAcheivements}</p>   
        <p>Email id: {props.emailid}</p>  
        <p>location: {props.location}</p>   
        <p>Interests: {props.interests}</p>    
        
    </div>
    )
    
}
export default CandidateDetailsProps;