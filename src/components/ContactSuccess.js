import React from 'react';
import Navbar from './Navbar';
import { Typography } from '@mui/material';

const ContactSuccess = () => {
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
          position: 'fixed',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Contact Us Success
      </Typography>
      <Typography
        style={{
          textAlign: 'center',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          fontSize: '18px',
          color: '#717171',
          marginTop: '10px',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Your contact was success!!
      </Typography>
    </div>
  );
};

export default ContactSuccess;
