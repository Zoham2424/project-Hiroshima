
import { Box } from '../components/Box';
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


      <div className="home-content" >
        
        <Box size="medium">
          <p>It’s all about friendship, teamwork, and the thrill of standing together against the odds. </p>
          <p> Each of us brings something different to the table, making it feel like a family. </p>
        </Box>
      </div>
    </>
  );
}


export default Home;
