import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box } from '../Components/Box';
import axios from 'axios';
import personas from './personas.json'; 


const PlayerDetails = () => {
  const { playerName } = useParams();
  const [player, setPlayer] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/players/${playerName}`);
        setPlayer(response.data);  
      } catch (err) {
        console.error('Error fetching player data:', err);
      }
    };
    if (playerName) {
      getData();
    }
  }, [playerName]);

  const handleBack = () => navigate(-1);

  return (
    <div className="center">
      {player ? (
        <Box size="lg">
          <div className="cardDetails">
            <img
              src={`/images/${player.Image}`}
              alt={playerName}
              style={{ width: '180px', marginBottom: '1rem' }}
            />
            <h2>{playerName}</h2>
            <h3>{player.nickname}</h3>
            {player.strategist && <p><strong>Strategist:</strong> {player.strategist}</p>}
            {player.duelist && <p><strong>Duelist:</strong> {player.duelist}</p>}
            {player.vanguard && <p><strong>Vanguard:</strong> {player.vanguard}</p>}
          </div>
          <button className="button" onClick={handleBack}>
            Back to Players
          </button>
        </Box>
      ) : (
        <p>Loading player data...</p>
      )}
    </div>
  );
};

export default PlayerDetails;