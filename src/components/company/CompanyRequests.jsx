import React from "react";
import Header from "../general/Header";
import CandidateDetailsEntry from "../candidate/CandidateDetailsEntry";
import CompanyRequestsProps from "./CompanyRequestsProps";

function renderEntry(detail){
    return(
        <CompanyRequestsProps 
            key={detail.id}
            candidateName={detail.candidateName}
            
            
        />
    ) 
}

function CompanyRequests(){
    return(
        <div>
        <Header />
        <h1 id="Exploreh1">Requests</h1>
        {CandidateDetailsEntry.map(renderEntry)}
    </div>
    );
   
}
export default CompanyRequests;