
import Box from '../components/Box';
import '../App.css';
import videoBg from '../assets/tokyo_shibuya.mp4';
import React from 'react';

const Home = () => {

  return (
   <>
    <div className="header">Hiroshima E-Sports</div>
      <div className='main'>
        <video src={videoBg} autoPlay loop muted />
      </div>


      <div className="home-content" style={{ position: 'relative', zIndex: 1 }}>
        
        <Box className="box">
          <p>More content or components can go here!</p>
        </Box>
        <Box className="box">
          <p>More content or components can go here!</p>
        </Box>
      </div>
    </>
  );
}


export default Home;
