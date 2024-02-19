import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';

const AboutUs = () => {
  const navigate = useNavigate();

    function navigateToHome() {
        navigate('/home');
    }
  return (
    <div style={styles.container}>
    <nav class="navbar navbar-expand navbar-dark bg-dark" id="main-header" style={{ backgroundColor: "black" }}>
                <a class="navbar-brand" href="#" style={{ color: "burlywood" }}>VrittiHUB</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <a class="nav-link" href="#" onClick={navigateToHome}>Home <span class="sr-only"></span></a>
                    

                </div>
                <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
            </nav>
      <h1 style={styles.heading}>About Us</h1>
      <div style={styles.member}>
        <h2 style={styles.name}>Rudra Khandelwal</h2>
        <p style={styles.info}>
          Hi, I'm Rudra, the tech enthusiast of the group. I love diving deep into code and solving complex problems.
        </p>
      </div>
      <div style={styles.member}>
        <h2 style={styles.name}>Atharva Mote</h2>
        <p style={styles.info}>
          Hey there, I'm Atharva. I'm passionate about web development and always eager to learn new technologies.
        </p>
      </div>
      <div style={styles.member}>
        <h2 style={styles.name}>Harshal Suryawanshi</h2>
        <p style={styles.info}>
          Hello, I'm Harshal. I enjoy crafting beautiful user interfaces and making websites come to life.
        </p>
      </div>
      <div style={styles.member}>
        <h2 style={styles.name}>Aditya Gorate</h2>
        <p style={styles.info}>
          Hi, I'm Aditya. I'm a backend wizard who loves building robust and scalable systems.
        </p>
      </div>
      <p style={styles.footer}>
        We're a group of tech enthusiasts who had a blast building this website using React. Thanks for visiting!
      </p>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  member: {
    marginBottom: '20px',
  },
  name: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  info: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
  footer: {
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default AboutUs;
