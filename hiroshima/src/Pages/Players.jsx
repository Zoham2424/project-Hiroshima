import React from 'react';
import { Box } from '../components/Box';
import personas from './personas.json';

const Players = () => {
    return (
      <>
        <div className="header">Hiroshima E-Sports Players</div>
        <div className="players-grid">
          {Object.entries(personas).map(([playerName, roles], index) => (
            <Box key={index} size="lg" className="player-box">
              <h2>{playerName}</h2>
              {roles.map((roleObj, idx) => {
                const roleType = Object.keys(roleObj)[0];
                const roleNames = roleObj[roleType];
  
                return (
                  <div key={idx} className="role-entry">
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
