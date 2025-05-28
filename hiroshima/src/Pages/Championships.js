import React, { useState } from 'react';
import Modal from '../components/Modal';
import '../App.css';

const achievementsByGame = {
  'Marvel Rivals': {
    image: '/marvel-rivals.jpg',
    achievements: [
      '🏆 1st Place Marvel Rivals Mecacon Cup 2025',
      ' 🥈 2st Place Hellhiem National tournment ',
      '🔥 MVP: zoham24',
    ],
  },
  'League of Legends': {
    image: '/League_of_Legends.jpg',
    achievements: [
      '🥈 2nd Place Heroes Clash CR Open',
       ' 🏆 1st Place Arcade colisium ',
       'LTL 2017 Registered',
       'Battlefly torunaments 10 1st Place',
      '🔥 MVP: zoham24',
    ],
  },
  'Other Game': {
    image: '/images/other-game.png',
    achievements: [
      '🏅 Achievement 1',
      '🏅 Achievement 2',
    ],
  },
};

const ChampionshipPage = () => {
const [openModal, setOpenModal] = useState(false);
const [currentGame, setCurrentGame] = useState(null);

const openGameModal = (game) => {
  setCurrentGame(achievementsByGame[game]);
  setOpenModal(true);
};

const closeModal = () => {
  setOpenModal(false);
  setCurrentGame(null);
};

  return (
    <div className="championship-container">
      <h1 className="header">Championships</h1>

      <div className="button-grid">
        {Object.keys(achievementsByGame).map((game) => (
          <button key={game} onClick={() => openGameModal(game)} className="game-button">
            {game}
          </button>
        ))}
      </div>
      <Modal isOpen={openModal} onClose={closeModal}>
  {currentGame && (
    <div className="modal-content">
      <img src={currentGame.image} alt="Game image" className="modal-game-image" />
      <h2>Achievements</h2>
      <ul>
        {currentGame.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  )}
</Modal>
    </div>
  );
};

export default ChampionshipPage;
