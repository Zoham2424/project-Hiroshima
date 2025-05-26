import { useNavigate } from 'react-router-dom';
import './App.css';
import { Outlet } from 'react-router-dom';
import ToggleSwitch from './components/ToggleSwitch';
import { ThemeContext } from './context/ThemeContext';
import {useContext } from 'react';


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
      <button onClick={showHome} className="button">Home</button>
        <button onClick={playersLookUp} className="button">Players</button>
        <ToggleSwitch onToggle={toggleTheme} />
      </div>
  
      <Outlet />
    </div>
  );
}

export default App;
