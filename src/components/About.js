import React from 'react';
import Navbar from './Navbar';
import { Typography } from '@mui/material';

import bg from '../images/Rectangle.png';
import about from '../images/about-img.png';

const About = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <Typography
        style={{
          textAlign: 'center',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          fontSize: '40px',
          color: 'black',
          marginTop: '50px',
        }}
      >
        About Us
      </Typography>
      <Typography
        style={{
          textAlign: 'center',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          fontSize: '18px',
          color: '#717171',
          marginTop: '10px',
        }}
      >
        Any question or remarks? Just write us a message!
      </Typography>
      <div style={{ position: 'relative', marginTop: '20px' }}>
        <span style={{ position: 'absolute',left:'20%', top:'20%', zIndex: 1, fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '32px', color: 'white', lineHeight: '1.5',textIndent: '100px' }}>
        At Secret Clinic, we are committed to providing<br/>exceptional healthcare services with a focus on your privacy,<br/>comfort, and well-being. Our clinic was founded with the belief<br/>that healthcare should be accessible, discreet, and of the<br/>highest quality.
        </span>
        <img
          src={bg}
          alt="rectangle-bg"
          style={{
            width: 'auto',
            height: 'auto',
            display: 'block',
            marginTop: '50px',
            marginLeft: '80px',
            position: 'relative',
          }}
        />
      </div>
      <img
          src={about}
          alt="about-img"
          style={{
            width: 'auto',
            height: 'auto',
            display: 'block',
            marginTop: '-120px',
            marginLeft: '80px',
            position: 'relative',
          }}
        />
    </div>
  );
};

export default About;
