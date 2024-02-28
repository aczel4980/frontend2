import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { Container, Typography, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


import location from '../images/location-icon-contact.png';
import mail from '../images/mail-contact.png';
import tel from '../images/tel-contact.png';

import circle from '../images/circle.png';

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/contact', formData);
      console.log(response.data);
      navigate('/contact/success');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


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
        Contact Us
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
      <Container
        style={{
          marginTop: '50px',
          backgroundColor: 'white',
          width: '1196px',
          height: '667px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '5px',
          marginBottom: '20px'
        }}
      >
        <Container
          style={{
            marginTop: '4px',
            backgroundColor: '#1A76D1',
            width: '650px',
            height: '647px',
            borderRadius: '8px',
            marginLeft: '5px',
            position: 'relative',
          }}
        >
          <Typography
            style={{
              textAlign: 'start',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '28px',
              color: 'white',
              marginTop: '30px',
              marginLeft: '15px'
            }}
          >
            Contact Information
          </Typography>
          <Typography
            style={{
              textAlign: 'start',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 300,
              fontSize: '18px',
              color: '#C9C9C9',
              marginTop: '10px',
              marginLeft: '15px'
            }}
          >
            Say something to start a live chat!
          </Typography>
          <Grid item xs={6} md={2} style={{ marginLeft: '15px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '90px' }}>
              <img src={tel} alt='tel' style={{ width: 'auto', height: 'auto', marginRight: '30px' }} />
              <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 200, fontSize: '16px', color: 'white' }}>+1012 3456 789</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '50px' }}>
              <img src={mail} alt='mail' style={{ width: 'auto', height: 'auto', marginRight: '30px' }} />
              <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 200, fontSize: '16px', color: 'white' }}>demo@gmail.com</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', paddingTop: '50px' }}>
              <img src={location} alt='location' style={{ width: 'auto', height: 'auto', marginRight: '30px' }} />
              <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 200, fontSize: '16px', color: 'white' }}>132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</Typography>
            </div>
          </Grid>
          <img
            src={circle}
            alt="circle"
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '60%',
              height: 'auto',
            }}
          />
        </Container>
        <Grid container spacing={2} style={{ marginLeft: '15px', marginTop: '-200px' }}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <TextField
                  label="First Name"
                  variant="standard"
                  color="grey"
                  focused
                  name="firstname"
                  onChange={handleChange}
                  value={formData.firstname}
                  sx={{
                    '& label': {
                      fontFamily: 'Poppins, sans-serif',
                    },
                    '& input': {
                      width: '300px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="standard"
                  color="grey"
                  focused
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  sx={{
                    '& label': {
                      fontFamily: 'Poppins, sans-serif',
                    },
                    '& input': {
                      width: '300px',
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <TextField
                  label="Last name"
                  variant="standard"
                  color="grey"
                  focused
                  name="lastname"
                  onChange={handleChange}
                  value={formData.lastname}
                  sx={{
                    '& label': {
                      fontFamily: 'Poppins, sans-serif',
                    },
                    '& input': {
                      width: '300px',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  variant="standard"
                  color="grey"
                  focused
                  name="phoneNumber"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  sx={{
                    '& label': {
                      fontFamily: 'Poppins, sans-serif',
                    },
                    '& input': {
                      width: '300px',
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: '50px' }}>
            <TextField
              label="Message"
              variant="standard"
              color="grey"
              focused
              multiline
              name="message"
              onChange={handleChange}
              value={formData.message}
              sx={{
                '& label': {
                  fontFamily: 'Poppins, sans-serif',
                },
                '& textarea': {
                  width: '680px',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: '40px', textAlign: 'right', marginRight: '60px' }}>
            <Button type="submit" variant="contained" onClick={handleSubmit} style={{ textTransform: 'none', fontFamily: 'Poppins, sans-serif', fontWeight: 300, fontSize: '16px', padding: '16px' }}>
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
