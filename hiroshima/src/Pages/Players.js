import React from 'react';
import { Box } from '../components/Box';
import personas from './personas.json';
import { Link } from 'react-router-dom';

const Players = () => {
  return (
    <>
      <div className="header">Hiroshima E-Sports Players</div>
      <div className="players-grid">
        {Object.entries(personas).map(([playerName, roles], index) => (
          <Link 
            to={`/players/${playerName}`} 
            key={index} 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
          <Box key={index} size="lg">
            <h2 style={{ fontSize: '2.5rem' }}>{playerName}</h2>

            {roles.map((roleObj, idx) => {
              const roleType = Object.keys(roleObj)[0];
              const roleNames = roleObj[roleType];

              if (roleType === "Image") {
                return (
                  <div key={idx}>
                    <img
                      src={process.env.PUBLIC_URL + '/' + roleNames}
                      className="player-image"
                      alt={`${playerName} visual`}
                    />
                  </div>
                );
              }

              if (roleType === "nickname") {
                return (
                  <div key={idx} className="player-nickname">
                    <em>Nickname:</em> {roleNames}
                  </div>
                );
              }

              
              return null;
            })}
          </Box>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Players;
