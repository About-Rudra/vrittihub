import React from "react";

function CandidateExploreProps(props){
    return(
<div>
        
        <h1 id="Exploreh1">Explore</h1>
    <div id="ExploreContainer">
        <div id="ExploreImage">
            <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn"  width="100%" alt="" />
            <button type="button" class="btn btn-info" id="DetailsButton">Details</button>
        </div>
        <div id="ExploreContent">
            <h2>{props.companyName}</h2>
            <h4>{props.positionName}</h4>
            <h6>{props.jd}
            </h6>
        </div>
    </div>
        
    </div>
    )
    
}
export default CandidateExploreProps;