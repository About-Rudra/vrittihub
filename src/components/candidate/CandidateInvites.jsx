import React from "react";
import Header from "../general/Header";
import CompanyDetailsEntry from "../company/CompanyDetailsEntry";
import CandidateInvitesProps from "./CandidateInvitesProps";

function renderEntry(detail){
    return(
        <CandidateInvitesProps 
            key={detail.id}
            companyName={detail.companyName}
            
            
        />
    ) 
}

function CandidateInvites(){
    return(
        <div>
        <Header />
        <h1 id="Exploreh1">Invites</h1>
        {CompanyDetailsEntry.map(renderEntry)}
    </div>
    );
   
}
export default CandidateInvites;