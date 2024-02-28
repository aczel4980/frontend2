import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Grid, Box, FormGroup } from '@mui/material';
import { Slide } from 'react-slideshow-image';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


import 'react-slideshow-image/dist/styles.css';

import headimage1 from '../images/header-1.png';
import headimage2 from '../images/header-2.png';
import headimage3 from '../images/header-3.png';

import doctor1 from '../images/dt1.png';
import doctor2 from '../images/dt2.png';
import doctor3 from '../images/dt3.png';

import medicalIcon from '../images/medicai-icon.png';
import hospitalIcon from '../images/hospital-icon.png';
import clockIcon from '../images/clock-icon.png';

import ambulance from '../images/ambulance.png';
import clock from '../images/clock.png';
import checklist from '../images/script.png';

import section1 from '../images/section1.png';
import section2 from '../images/section2.png';


import '../styles/homepage.css';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import faceIcon from '../images/face-icon.png';
import calendarIcon from '../images/calendar-icon.png';
import userIcon from '../images/user-icon.png';
import homeIcon from '../images/home-icon.png';

import bt1 from '../images/bt1.png';
import bt2 from '../images/bt2.png';
import bt3 from '../images/bt3.png';
import bt4 from '../images/bt4.png';
import bt5 from '../images/bt5.png';

import team1 from '../images/team1.png';
import team2 from '../images/team2.png';
import team3 from '../images/team3.png';
import team4 from '../images/team4.png';
import team5 from '../images/team5.png';
import team6 from '../images/team6.png';

import tel from '../images/phone-icon.png';
import mail from '../images/mail-icon.png';
import location from '../images/map-icon.png';

import Navbar from './Navbar';

const Homepage = () => {
  const images = [headimage1, headimage2, headimage3];
  const navigate = useNavigate();
  const [subscribe, setSubscribe] = useState({email: ''});

  const handleChange = (e) => {
    setSubscribe({ ...subscribe, [e.target.name]: e.target.value });
  };

  const boxDetails = [
    { icon: homeIcon, number: '35470', text: 'Give consult' },
    { icon: userIcon, number: '602', text: 'Specialist Doctors' },
    { icon: faceIcon, number: '4823', text: 'Happy Patients' },
    { icon: calendarIcon, number: '20', text: 'Years of Experience' },
  ];

  const section2Details = [
    { img: bt1 },
    { img: bt2 },
    { img: bt3 },
    { img: bt4 },
    { img: bt5 }
    ,
  ];

  const handleSubmit = async () => {
    try {
      navigate('/chat')
    } catch (error) {
      console.error('Error go to chating:', error);
    }
  };

  const handleSubscibe = async () => {
    try {
      const response = await axios.post('http://localhost:3000/subscribe', subscribe);
      setSubscribe({ email: '' });

      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  const CustomSlide = ({ index, images }) => (
    <div className="each-slide-effect">
      <div style={{ backgroundImage: `url(${images[index]})`, width: '100%', height: '680px', backgroundSize: 'cover' }}>
        <span style={{ color: 'black', fontSize: '40px', fontWeight: 'bold', padding: '85px', fontFamily: 'Poppins, sans-serif' }}>
          if you want to <span style={{ color: '#1A76D1', fontSize: '48px' }}>Consult</span> or get <span style={{ color: '#1A76D1', fontSize: '48px' }}>Advice</span><br />
          from the Doctor. You can talk to us<br /><span style={{ color: '#1A76D1', fontSize: '48px' }}>Confidentially !</span><br />
          <p style={{ color: '#515151', fontSize: '20px', fontWeight: 'normal' }}>You can trust us for both advice and confidentiality. Because we have more than<br />10 years of experience.</p>
          <Button className="navbar-button2" onClick={handleSubmit} variant="contained" style={{ color: 'white', textTransform: 'none', backgroundColor: 'black', fontFamily: 'Poppins, sans-serif', width: '260px', height: '71px', fontSize: '24px' }}>
            Chat now
          </Button>
        </span>
      </div>
    </div>
  );
  
  const DoctorCard = ({ doctorImage, doctorName, specialty, hospital, schedule, icon }) => (
    <Container style={{ backgroundColor: '#004D9A', borderRadius: '20px', width: '400px', height: '600px', position: 'relative', marginTop: '-150px' }}>
      <img src={doctorImage} alt="Doctor" className="doctoer-card" style={{ paddingTop: '25px', width: '100%', borderRadius: '20px' }} />
      <Typography style={{ color: 'white', fontWeight: 500, fontFamily: 'Poppins, sans-serif', fontSize: '32px' }}>{doctorName}</Typography>
      <Box style={{ display: 'flex', flexDirection: 'row', marginTop: '15px' }}>
        <img src={medicalIcon} alt="icon" style={{ width: '24px', height: '24px' }} />
        <Typography style={{ color: 'white', fontWeight: 100, fontFamily: 'Poppins, sans-serif', fontSize: '16px', marginLeft: '15px' }}>{specialty}</Typography>
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'row', marginTop: '5px' }}>
        <img src={hospitalIcon} alt="icon" style={{ width: '24px', height: '24px' }} />
        <Typography style={{ color: 'white', fontWeight: 100, fontFamily: 'Poppins, sans-serif', fontSize: '16px', marginLeft: '15px' }}>{hospital}</Typography>
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'row', marginTop: '7px' }}>
        <img src={clockIcon} alt="icon" style={{ width: '20px', height: '20px', marginLeft: '2px' }} />
        <Typography style={{ color: 'white', fontWeight: 100, fontFamily: 'Poppins, sans-serif', fontSize: '16px', marginLeft: '15px' }}>{schedule}</Typography>
      </Box>
      <img src={icon} alt="ambulance" style={{ position: 'absolute', bottom: '0', right: '0', width: '120px', height: 'auto' }} />
    </Container>
  );
  

  return (
    <AppBar position="static">
      <Navbar/>
      <Slide
        style={{ backgroundColor: 'white' }}
        images={images}
        prevArrow={<div style={{ width: '42px', height: '42px', borderRadius: '31px', backgroundColor: '#1A76D1', margin: '15px' }}><ArrowBackIosIcon style={{ color: 'white', padding: '10px', marginLeft: '2px' }} /></div>}
        nextArrow={<div style={{ width: '42px', height: '42px', borderRadius: '31px', backgroundColor: '#1A76D1', margin: '15px' }}><ArrowForwardIosIcon style={{ color: 'white', padding: '10px', marginLeft: '2px' }} /></div>}
        indicators={false}
      >
        {images.map((image, index) => (
          <CustomSlide key={index} index={index} images={images} />
        ))}
      </Slide>
      <Grid container spacing={10} justifyContent="center" style={{ backgroundColor: 'white' }}>
        <Grid item>
          <DoctorCard
            doctorImage={doctor1}
            doctorName="Dr. James Boston"
            specialty="Consulting doctor"
            hospital="Royal London Hospital"
            schedule="06:00 PM - 02:30 AM"
            icon={ambulance}
          />
        </Grid>
        <Grid item>
          <DoctorCard
            doctorImage={doctor2}
            doctorName="Dr. Sarah Johnson"
            specialty="Consulting doctor"
            hospital="St Thomas' Hospital"
            schedule="12:30 PM - 09:30 PM"
            icon={clock}
          />
        </Grid>
        <Grid item>
          <DoctorCard
            doctorImage={doctor3}
            doctorName="Dr. David Williams"
            specialty="Consulting doctor"
            hospital="King's College Hospital"
            schedule="08:00 AM - 05:00 PM"
            icon={checklist}
          />
        </Grid>
      </Grid>
      <Container style={{ maxWidth: 'none', padding: 0, backgroundColor: 'white' }}>
        <Box style={{ position: 'relative', width: '100%', height: '258px', backgroundColor: '#1a76d1cc', marginTop: '40px', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
          <img src={section1} alt="section1" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }} />

          <Box style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
            {boxDetails.map((detail, index) => (
              <Box key={index} style={{ textAlign: 'center', display: 'flex', alignItems: 'center', color: 'white' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px solid white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={detail.icon} alt="home" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <Box style={{ marginLeft: '20px', textAlign: 'left' }}>
                  <Typography style={{ fontWeight: 'bold', fontSize: '32px', margin: '0', fontFamily: 'Poppins, sans-serif' }}>{detail.number}</Typography>
                  <Typography style={{ fontSize: '24px', margin: '0', fontWeight: 100, fontFamily: 'Poppins, sans-serif' }}>{detail.text}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      <Container style={{ maxWidth: 'none', padding: 50, backgroundColor: 'white' }}>
        <Typography style={{ color: '#474fa0', alignContent: 'center', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>Newsletter</Typography>
        <Typography style={{ alignContent: 'center', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', fontSize: '40px', color: 'black' }}>JOIN US</Typography>
        <Typography style={{ alignContent: 'center', textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 100, fontSize: '14px', color: '#585858' }}>Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics </Typography>
      </Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10vh',
        }}
        style={{ backgroundColor: 'white' }}
      >
        <Container sx={{ width: '688px', maxWidth: '100%', display: 'flex', alignItems: 'center' }}>
          <FormGroup sx={{ display: 'flex', alignItems: 'center', width: '100%' }} row>
            <TextField
              variant="outlined"
              focused={false}
              sx={{
                flexGrow: 1,
                '& .MuiOutlinedInput-root': {
                  borderRight: '1px solid white',
                  '&.Mui-focused': {
                    border: 'none',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                },
              }}
              type='email'
              name='email'
              onChange={handleChange}
              value={subscribe.email}
            />
            <Button variant="contained" onClick={handleSubscibe} disableElevation style={{ textTransform: 'none', fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '14px', padding: '16px', marginLeft: '-10px' }}>
              Subscibe
            </Button>
          </FormGroup>
        </Container>
      </Box>
      <Container style={{ maxWidth: 'none', padding: 0, backgroundColor: 'white' }}>
        <Box style={{ position: 'relative', width: '100%', height: '258px', backgroundColor: '#1a76d1cc', marginTop: '40px', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
          <img src={section2} alt="section1" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }} />

          <Box style={{ display: 'flex', alignItems: 'center', marginLeft: '50px' }}>
            {section2Details.map((detail, index) => (
              <Box key={index} style={{ textAlign: 'center', display: 'flex', alignItems: 'center', color: 'white', justifyContent: 'center' }}>
                <img src={detail.img} alt="home" style={{ width: 'auto', height: 'auto' }} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      <Container style={{ maxWidth: 'none', padding: '50px 0', backgroundColor: 'white', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <Typography style={{ textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '64px', color: 'black', margin: '20px 0' }}>Our Success Team</Typography>
        <div className="scroll-container">
          <img src={team1} alt="team1" style={{ width: '285px', height: 'auto', margin: '0 10px' }} />
          <img src={team2} alt="team2" style={{ width: '285px', height: 'auto', margin: '0 10px' }} />
          <img src={team3} alt="team3" style={{ width: '285px', height: 'auto', margin: '0 10px' }} />
          <img src={team4} alt="team4" style={{ width: '285px', height: 'auto', margin: '0 10px' }} />
          <img src={team5} alt="team5" style={{ width: '285px', height: 'auto', margin: '0 10px' }} />
          <img src={team6} alt="team6" style={{ width: '285px', height: 'auto', margin: '0 10px' }} />
        </div>
      </Container>


      <Container style={{ height: '270px', backgroundColor: '#1A76D1', marginTop: '60px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={2}>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '16px', color: 'white' }} className='bottom-text'>Company Info</Typography>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white', paddingTop: '20px' }} className='bottom-text'>About Us</Typography>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white', paddingTop: '10px' }} className='bottom-text'>Carrier</Typography>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white', paddingTop: '10px' }} className='bottom-text'>We are hiring</Typography>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white', paddingTop: '10px' }} className='bottom-text'>Blog</Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '16px', color: 'white' }} className='bottom-text'>Legal</Typography>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white', paddingTop: '20px' }} className='bottom-text'>About Us</Typography>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white', paddingTop: '10px' }} className='bottom-text'>Carrier</Typography>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white', paddingTop: '10px' }} className='bottom-text'>We are hiring</Typography>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white', paddingTop: '10px' }} className='bottom-text'>Blog</Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '16px', color: 'white' }} className='bottom-text'>Features</Typography>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white', paddingTop: '20px' }} className='bottom-text'>Business Marketing</Typography>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white', paddingTop: '10px' }} className='bottom-text'>User Analytic</Typography>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white', paddingTop: '10px' }} className='bottom-text'>Live Chat</Typography>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white', paddingTop: '10px' }} className='bottom-text'>Unlimited Support</Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '16px', color: 'white' }} className='bottom-text'>Resources</Typography>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white', paddingTop: '10px' }} className='bottom-text'>IOS & Android</Typography>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white', paddingTop: '10px' }} className='bottom-text'>Watch a Demo</Typography>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white', paddingTop: '10px' }} className='bottom-text'>Live Chat</Typography>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white', paddingTop: '10px' }} className='bottom-text'>Customers</Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '16px', color: 'white' }} className='bottom-text'>Get In Touch</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '10px' }}>
              <img src={tel} alt='tel' style={{ width: '24px', height: '24px', marginRight: '10px' }} />
              <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white' }}> (480) 555-0103</Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '10px' }}>
              <img src={location} alt='location' style={{ width: '24px', height: '24px', marginRight: '10px' }} />
              <Typography style={{
                textAlign: 'initial',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'bold',
                fontSize: '14px',
                color: 'white',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                maxWidth: '35ch',
              }}>
                4517 Washington Ave. Manchester, Kentucky 39495
              </Typography>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '10px' }}>
              <img src={mail} alt='mail' style={{ width: '24px', height: '24px', marginRight: '10px' }} />
              <Typography style={{ textAlign: 'initial', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white' }}> debra.holt@example.com</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>

    </AppBar>
  );
};

export default Homepage;
