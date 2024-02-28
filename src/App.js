import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';

import About from './components/About';
import Contact from './components/Contact';
import Appointment from './components/Appointment';
import Chat from './components/Chat';
import Success from './components/Success';
import ContactSuccess from './components/ContactSuccess';

const App = () => {
  return (
      <div className="app">
        <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/appointment" element={<Appointment/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/appointment/success" element={<Success/>} />
          <Route path="/contact/success" element={<ContactSuccess/>} />
        </Routes>
      </div>
  );
};

export default App;
