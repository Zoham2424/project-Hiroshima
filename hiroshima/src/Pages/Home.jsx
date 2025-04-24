import { useEffect, useState } from 'react';
import Box from '../components/Box';
import '../App.css';


const Home = () => {

  return (
    <>
      <div className="header">This is home</div>
                <p>Welcome to home</p>
      <div className="caja-fata">
      <Box size="sm" >
        <p>This is a resized small box</p>
      </Box>
      </div>
      <Box size="md">
        <p>This is a medium box</p>
      </Box>

      <Box size="lg">
        <p>This is a large box</p>
      </Box>
    </>
  );
};

export default Home;
