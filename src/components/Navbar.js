import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import logo from '../images/logo.png';

import '../styles/navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth={false} className="navbar">
        <Toolbar>
          <img src={logo} alt="Logo" className="navbar-logo" />
          <Typography variant="h6" sx={{ flexGrow: 1 }} />
          <div className="navbar-text">
            <Link to="/" className={`navbar-link ${activeLink === 'Home' && 'active-home'}`} onClick={() => handleLinkClick('Home')}>
              Home
            </Link>

            <Link to="/chat" className={`navbar-link ${activeLink === 'Chat' && 'active-chat'}`} onClick={() => handleLinkClick('Chat')}>
              Chat
            </Link>

            <Link to="/contact" className={`navbar-link ${activeLink === 'Contact' && 'active-contact'}`} onClick={() => handleLinkClick('Contact')}>
              Contact
            </Link>

            <Link to="/about" className={`navbar-link ${activeLink === 'About' && 'active-about'}`} onClick={() => handleLinkClick('About')}>
              About
            </Link>
          </div>
          <div style={{ paddingTop: '70px', marginLeft: '-30px' }}>
            <Link to="/appointment" className="navbar-button-link">
              <Button className="navbar-button" variant="contained" style={{ color: 'white', fontFamily: 'Monserrat, sans-serif', fontWeight: 'bold', fontSize: '16px', textTransform: 'none' }}>
                Book Appointment
              </Button>
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
