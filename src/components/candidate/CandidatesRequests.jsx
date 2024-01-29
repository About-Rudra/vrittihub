import React from "react";
import Header from "../general/Header";
import CompanyDetailsEntry from "../company/CompanyDetailsEntry";
import CandidatesRequestsProps from "./CandidatesRequestsProps";

function renderEntry(detail){
    return(
        <CandidatesRequestsProps 
            key={detail.id}
            companyName={detail.companyName}
            
            
        />
    ) 
}

function CandidatesRequests(){
    return(
        <div>
        <Header />
        <h1 id="Exploreh1">Requests</h1>
        {CompanyDetailsEntry.map(renderEntry)}
    </div>
    );
   
}
export default CandidatesRequests;