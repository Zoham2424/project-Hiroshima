import { useEffect, useState } from 'react';
import Box from '../components/Box';
import '../App.css';


const Home = () => {

  return (
    <>
      <div className="header">This is home</div>
        <p>Welcome to home</p>
        <Box>
          <h1>Box</h1>
          <p>This is a box</p>
        </Box>
    </>
  );
};

export default Home;
