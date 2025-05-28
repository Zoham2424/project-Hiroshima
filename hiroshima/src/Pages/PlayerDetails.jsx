import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box } from '../components/Box';
import axios from 'axios';

const PlayerDetails = () => {
  const { playersId } = useParams();
  const [player, setPlayer] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/players/${playersId}`);
        setPlayer(response.data);
      } catch (err) {
        console.error('Error fetching player data:', err);
        setPlayer(null);
      }
    };

    getData();
  }, [playersId]);

  const handleBack = () => navigate(-1);

  if (player === null) {
    return <p>Player not found.</p>;
  }

  if (!player) {
    return <p>Loading player data...</p>;
  }

  return (
    <div className="center">
      <Box size="lg">
        <div className="cardDetails">
          <div className="card-text">
            <h2>{player.id}</h2>
            <h3>AKA: {player.nickname}</h3>
            <h4 className="player-description">{player.description}</h4>
            <p>Roles:</p>
            {player.strategist && (
              <p><strong>Strategist:</strong> {player.strategist}</p>
            )}
            {player.duelist && (
              <p><strong>Duelist:</strong> {player.duelist}</p>
            )}
            {player.vanguard && (
              <p><strong>Vanguard:</strong> {player.vanguard}</p>
            )}
          </div>
          <div className="card-image">
            <img
              src={`/${player.Image}`}
              alt={player.id}
            />
          </div>
          <div className="social-links">
            <h3>Social Links</h3>
            <ul>
              {player.social.instagram && (
                <li>
                  <a href={player.social.instagram} target="_blank" rel="noreferrer">📸 Instagram</a>
                </li>
              )}
              {player.social.twitch && (
                <li>
                  <a href={player.social.twitch} target="_blank" rel="noreferrer">🎮💜 Twitch</a>
                </li>
              )}
            </ul>
          </div>
        </div>
        
      </Box>
      <div className="button-container">
      <button className="button" onClick={handleBack}>
        Back to Players
      </button>
    </div>
    </div>
  );
}

export default PlayerDetails;
