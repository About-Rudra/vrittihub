import React from "react";
import CandidateDetailsEntry from "../candidate/CandidateDetailsEntry";
import CompanyExploreProps from "./CompanyExploreProps";
import Header1 from "../general/Header1";

function renderEntry(detail){
    return(
        <CompanyExploreProps 
            
            key={detail.id}
            candidateName={detail.candidateName}
            interests={detail.interests}
            bio={detail.bio}
            
        />
    ) 
}

function CompanyExplorePage(){
    return(
        <div>
        <Header1 />
        <h1 id="Exploreh1">Explore</h1>
        {CandidateDetailsEntry.map(renderEntry)}
    </div>
    );
   
}
export default CompanyExplorePage;