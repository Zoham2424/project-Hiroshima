import React from 'react';
import { Box } from '../components/Box';
import personas from './personas.json';

const Players = () => {
  return (
    <>
      <div className="header">Hiroshima E-Sports Players</div>
      <div className="players-grid">
        {Object.entries(personas).map(([playerName, roles], index) => (
          <Box key={index} size="lg" >
            <h2 >{playerName}</h2>

            {roles.map((roleObj, idx) => {
              const roleType = Object.keys(roleObj)[0];
              const roleNames = roleObj[roleType];

              if (roleType === "Image") {
                return (
                  <div key={idx}  >
                    <img src={process.env.PUBLIC_URL + '/' + roleNames} className="player-image" />
                  </div>
                );
              }

              return (
                <div key={idx}>
                  <strong>{roleType.charAt(0).toUpperCase() + roleType.slice(1)}:</strong> {roleNames}
                </div>
              );
            })}
          </Box>
        ))}
      </div>
    </>
  );
};

export default Players;
