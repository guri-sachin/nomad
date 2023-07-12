import React from 'react';
import './App.css';
import coupleImage from './cuopleu.jpg';

const Heart = () => {
  return (
    <div className="heart-container">
      <div className="heart">
        <span className="heart-icon">&hearts;</span>
        <img src={coupleImage} alt="Couple" className="couple-image" />
      </div>
    </div>
  );
};

export default Heart;