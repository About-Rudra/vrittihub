import React from "react";

function CompanyDetailsProps(props){
    return(
<div>
        <h1>We Are' {props.companyName}!</h1>
        <p>JD: {props.jd}</p>
        <p>Qualification Required: {props.qualificationRequired}</p>
        <p>Contact Number: {props.contactNumber}</p>   
        <p>Position Name: {props.positionName}</p>    
        <p>Skills Required: {props.skillsRequired}</p>   
        <p>Email id: {props.emailid}</p>  
        <p>location: {props.location}</p>   
        <p>Work Domain: {props.domain}</p>    
        
    </div>
    )
    
}
export default CompanyDetailsProps;