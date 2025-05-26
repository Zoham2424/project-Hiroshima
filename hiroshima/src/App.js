import { useNavigate } from 'react-router-dom';
import './App.css';
import { Outlet } from 'react-router-dom';
import ToggleSwitch from './components/ToggleSwitch';
import { ThemeContext } from './context/ThemeContext';
import {useContext } from 'react';
import logo from './assets/logo.jpg';


function App() {
  const navigate = useNavigate();
  const { toggleTheme, theme } = useContext(ThemeContext);
  const playersLookUp = () => {
    navigate('/players'); 
  };

  const showHome = () => {
    navigate('/'); 
  };

  return (
    <div className="App">
      <div className="nav-container">
        <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <button onClick={showHome} className="button">Home</button>
        <button onClick={playersLookUp} className="button">Players</button>
        <button onClick={() => navigate('/aboutUs')} className="button">About Us</button>
        <ToggleSwitch onToggle={toggleTheme} />
      </div>
  
      <Outlet />
    </div>
  );
}

export default App;
