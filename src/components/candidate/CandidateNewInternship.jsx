import React from "react";

function CandidateNewInternship() {
  return (
    <div id="signupCoContainer">
        <div id="right">
            
            <h1><br />Post New Internship :) </h1>
         </div>

         <div id="signupCoForm1"><form>
            <div class="rectangle11"></div>
            <div class="rectangle22"></div>
            
            
            <div class="signupCogroup1">
                <h2 id="head1">Internship Details</h2>
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Student Name" />
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Qualification " />
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Contact Number" />
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="School/College Name" />
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Skills/ Acheivements " />
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Bio" />
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Email ID" />
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Location" />
                <input type="text" class="cogform1" id="formGroupExampleInput" placeholder="Where do u want internship?" />
                <label class="form-label" id="photolabel" for="customFile">Upload CV</label>
                <input type="file" class="form-label" id="customFile" />
                <button type="submit" class="signupco1">Post</button>
            </div>
             

        </form></div>
    </div>
  );
}

export default CandidateNewInternship;