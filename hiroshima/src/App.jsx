import { useNavigate } from 'react-router-dom';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const playersLookUp = () => {
    navigate('/players'); // Players page
  };

  const showHome = () => {
    navigate('/'); // Home page
  };

  return (
    <div className="App">
      <div className="center">
        <button onClick={playersLookUp} className="button">
          Players
        </button>
        <button onClick={showHome} className="button">
          Home
        </button>
      </div>

      <Outlet />
    </div>
  );
}

export default App;
