import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { Container, Typography, TextField, Button } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import SendIcon from '@mui/icons-material/Send';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import userImage from '../images/user_profile.png';
import doctorImage from '../images/doctor.png';

const Chat = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const navigate = useNavigate();

  const handleUserMessageChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    const newUserMessage = `User: ${userMessage}`;
    setChatHistory((prevHistory) => [...prevHistory, { role: 'user', content: newUserMessage }]);
    setTimeout(() => {
      const currentTime = new Date().toLocaleTimeString();
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { role: 'time', content: `${currentTime}` },
      ]);
    }, 500);
    setUserMessage('');

    const response = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newUserMessage }),
    });

    const data = await response.json();

    const assistantMessage = data[0]?.message?.content || 'Assistant: Message not available';

    setChatHistory((prevHistory) => [...prevHistory, { role: 'assistant', content: assistantMessage }]);
  };

  const handleEndChat = () => {
    navigate('/');
  };


  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <Container style={{ paddingTop: '0px', paddingBottom: '20px', minHeight: '100vh', position: 'relative' }}>
        <Container style={{
          borderRadius: '30px',
          boxShadow: '0px 4px 4px #00000040',
          height: '72px',
          left: 0,
          alignItems: 'center',
          position: 'relative',
          textAlign: 'center',
          top: 0
        }}>
          <Typography style={{
            paddingTop: '24px',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '18px',
            color: 'black',
          }}> Dr.James Boston<CircleIcon style={{ marginLeft: '5px', marginTop: '10px', color: '#04C100', width: '10px', height: '10px' }} />
          </Typography>
        </Container>
        <Typography style={{
          paddingTop: '20px',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '18px',
          color: 'black',
          textAlign: 'left'
        }}> <CircleIcon style={{ marginLeft: '5px', marginTop: '10px', color: 'red', width: '10px', height: '10px' }} />
          Live chat
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '80px' }}>
          {chatHistory.map((message, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: message.role === 'user' ? 'row-reverse' : 'row',
                alignItems: 'center',
                marginTop: '10px',
              }}
            >
              {message.role === 'time' ? (
                <span style={{ fontSize: '12px', color: '#777', marginRight: '10px', marginLeft: 'auto', marginTop: '-20px', fontFamily: 'Poppins, sans-serif' }}>
                  <DoneAllIcon style={{ width: '12px', height: '12px', marginRight: '2px' }} />{message.content}
                </span>
              ) : (
                <>
                  <img
                    src={message.role === 'user' ? userImage : doctorImage}
                    alt={message.role}
                    style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px', marginLeft: '10px', marginTop: '-10px' }}
                  />
                  <div
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      backgroundColor: message.role === 'user' ? '#1A76D1' : '#DFDFDF',
                      borderRadius: '30px',
                      padding: '10px',
                      marginBottom: '10px',
                      width: 'fit-content',
                      color: message.role === 'user' ? 'white' : 'black',
                    }}
                  >
                    {message.content.replace('User:', '').replace('Assistant:', '')}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        
        <div style={{ position: 'relative', bottom: 40, left: 0, width: '100%', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'400px' }}>
          <TextField
            placeholder='Type here'
            variant="outlined"
            fullWidth
            value={userMessage}
            onChange={handleUserMessageChange}
            InputProps={{
              style: {
                borderRadius: '30px',
                borderColor: 'transparent',
                fontFamily: 'Poppins, sans-serif',
                color: 'black',
              },
            }}
          />
          <Button
            onClick={handleSendMessage}
            style={{ marginLeft: '10px', borderRadius: '30px' }}
            endIcon={<SendIcon style={{ width: '30px', height: '30px', marginRight: '30px' }} />}
          >
          </Button>
        </div>
      </Container>
      <Button
        onClick={handleEndChat}
        style={{position:'relative',bottom: 10, left: '50%', marginLeft: '0px',marginTop:'-100px', borderRadius: '30px', fontFamily: 'Poppins, sans-serif', backgroundColor:'#D32121', color:'white'}}
      >
        END CHAT
      </Button>
    </div>
    
  );
};

export default Chat;