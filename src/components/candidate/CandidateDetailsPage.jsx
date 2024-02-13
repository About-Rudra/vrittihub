import React, { useState, useEffect } from 'react';
import Header from "../general/Header";
import CandidateDetailsProps from "./CandidateDetailsProps";
import CandidateDetailsEntry from "../candidate/CandidateDetailsEntry";


// function renderEntry(detail) {
//     return (
//         <CandidateDetailsProps
//             key={detail.id}
//             candidateName={detail.candidateName}
//             qualification={detail.qualification}
//             contactNumber={detail.contactNumber}
//             collegeName={detail.collegeName}
//             skillsAcheivements={detail.skillsAcheivements}
//             bio={detail.bio}
//             emailid={detail.emailid}
//             location={detail.location}
//             interests={detail.interests}
//         />
//     )
// }

function CandidateDetailsPage() {

    const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to fetch data only once when the component mounts

    return (
        <div>
            <Header />
            <div id="CDPContainer">

            {/* {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )} */}

                <div class="CDP">
                    <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn" height="80%" width="100%" alt="" />
                </div>
                <div class="CDP">


                    <div class="profileText">
                        {/* {CandidateDetailsEntry.map(renderEntry)} */}
                    </div>

                    <button type="submit" class="btn btn-primary" id="submitButton" >Send Invite</button>
                </div>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

            </div>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>

        </div>


    );
}

export default CandidateDetailsPage;
