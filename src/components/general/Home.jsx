import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AboutUs from './AboutUs';
import ForgotPass from './ForgotPass';
import AreUALogin from './AreUALogin';
import AreUA from './AreUA';


function Home() {

    const navigate = useNavigate();

    function navigateToHome() {
        navigate('/home');
    }
    function navigateToAboutUs() {
        navigate('/aboutus')
    }
    function navigateToAreUA(){
        navigate('/areua')
    }
    function navigateToLogin(){
        navigate('/areualogin')
    }


    return (

        <div>


            <nav class="navbar navbar-expand navbar-dark bg-dark" id="main-header" style={{ backgroundColor: "black" }}>
                <a class="navbar-brand" href="#" style={{ color: "burlywood" }}>VrittiHUB</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <a class="nav-link" href="#" onClick={navigateToHome}>Home <span class="sr-only"></span></a>
                    <a class="nav-link" href="#" onClick={navigateToAboutUs}>About us <span class="sr-only"></span></a>

                    <button class="btn btn-outline-success my-2 my-sm-0" onClick={navigateToLogin}>Log in</button>

                </div>
            </nav>
            <Routes>
                <Route path="/aboutus"  element={<AboutUs/>} />
                <Route path="/home" element={<Home />} />
                <Route path="/areualogin" element={<AreUALogin />} />
            </Routes>

            <div class="card">
                <img class="card-img-top" src="https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-124269.jpg?size=626&ext=jpg&ga=GA1.1.514287006.1705464092&semt=sph" alt="Card image cap" />
                <div class="card-body"  >
                    <h5 class="card-title" style={{ textAlign: "center", marginTop: "5rem" }}>GET, GIVE Internships Choice is Your's</h5>
                    <p class="card-text" style={{ textAlign: "left" }}>Revolutionizing internship connections! Platform offers recruiters to connect with talented candidates,  providing aspiring interns an intuitive space to discover and apply for opportunities</p>
                    <a href="#" onClick={navigateToAreUA} class="btn btn-primary" style={{ marginLeft: "15rem", fontSize: "large", background: "linearGradient(to right, #bd4714, #ddaf0a, #5ad11f, #138bac, #07f032)", color: "black", borderRadius: "4rem" }}  >Register Now!</a>
                </div>
            </div>
            <Routes>
                <Route path="/areua" element={<AreUA />} />
            </Routes>


            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
                integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                crossorigin="anonymous"></script>

        </div>
    );


}

export default Home;