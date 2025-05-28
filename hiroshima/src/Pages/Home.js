import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Box } from '../components/Box';
import '../App.css';
import videoBg from '../assets/tokyo_shibuya.mp4';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.foreground}}>
      <div className="header">Hiroshima E-Sports</div>
      <div className="main">
        <video src={videoBg} autoPlay loop muted />
      </div>

      <div className="home-content" style={{ color: theme.background }}>
        <Box size="medium">
          <p>It’s all about friendship, teamwork, and the thrill of standing together against the odds.</p>
          <p>Each of us brings something different to the table, making it feel like a family.</p>
        </Box>
      </div>
    </div>
  );
};

export default Home;
