import React from "react";
import Header from "../general/Header";
import CandidateDetailsEntry from "../candidate/CandidateDetailsEntry";
import CompanyInvitesProps from "./CompanyInvitesProps";

function renderEntry(detail){
    return(
        <CompanyInvitesProps 
            key={detail.id}
            candidateName={detail.candidateName}
            
            
        />
    ) 
}

function CompanyInvites(){
    return(
        <div>
        <Header />
        <h1 id="Exploreh1">Invites</h1>
        {CandidateDetailsEntry.map(renderEntry)}
    </div>
    );
   
}
export default CompanyInvites;