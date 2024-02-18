import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
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
