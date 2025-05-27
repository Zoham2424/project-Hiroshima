import React, { useState } from 'react';
import Modal from '../components/Modal';

const ChampionshipPage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="p-8">
      <h1 className="header"> Championships</h1>

      <button
        onClick={() => setOpenModal(true)}
        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md"
      >
        Ver Logros
      </button>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <h2 className="text-xl font-bold mb-3 text-red-700">Logros Destacados</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          <li>🏆 1er Lugar en Marvel Rivals LATAM Cup 2025</li>
          <li>🥈 2do Lugar en Heroes Clash CR Open</li>
          <li>🔥 MVP del Torneo: HiroX</li>
        </ul>
      </Modal>
    </div>
  );
};

export default ChampionshipPage;