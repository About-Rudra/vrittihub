import React from "react";
import CompanyDetailsEntry from "../company/CompanyDetailsEntry";
import CandidateExploreProps from "./CandidateExploreProps";
import Header1 from "../general/Header1";
import Cookies from 'js-cookie';

function renderEntry(detail){
    return(
        <CandidateExploreProps 
            key={detail.id}
            companyName={detail.companyName}
            positionName={detail.positionName}
            jd={detail.jd}
            
        />
    ) 
}

function CandidateExplorePage(){
    return(
        <div>
        <Header1 />
        {CompanyDetailsEntry.map(renderEntry)}
    </div>
    );
   
}
export default CandidateExplorePage;