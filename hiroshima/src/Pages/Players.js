import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Box } from '../components/Box';
import personas from './personas.json';
import { Link } from 'react-router-dom';

const Players = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.foreground}}>
      <div className="header" style={{ color: theme.foreground }}>
        Hiroshima E-Sports Players
      </div>

      <div className="players-grid">
        {Object.entries(personas).map(([playerName, roles], index) => (
          <Link
            to={`/players/${playerName}`}
            key={index}
            style={{ textDecoration: 'none', color: theme.foreground }}
          >
            <Box key={index} size="lg" style={{ color: theme.foreground }}>
              <h2 style={{ fontSize: '2.5rem', color: theme.foreground }}>{playerName}</h2>

              {roles.map((roleObj, idx) => {
                const roleType = Object.keys(roleObj)[0];
                const roleNames = roleObj[roleType];

                if (roleType === 'Image') {
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

                if (roleType === 'nickname') {
                  return (
                    <div key={idx} className="player-nickname" style={{ color: theme.foreground }}>
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
    </div>
  );
};

export default Players;
