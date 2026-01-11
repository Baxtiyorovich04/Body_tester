import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_coin-drop.scss';

const CoinDrop = () => {
  const navigate = useNavigate();

  const handleCoinClick = () => {
    // Navigate to selection page after a short delay
    setTimeout(() => {
      navigate('/selection');
    }, 500);
  };

  return (
    <div className="coin-drop">
      <div className="coin-drop__container">
        <div className="coin-drop__content">
          <div className="coin-drop__text">
            <p className="coin-drop__line1">Boshlash uchun maxsus</p>
            <p className="coin-drop__line2">tangani tashlang</p>
          </div>
          
          <div className="coin-drop__icon-wrapper" onClick={handleCoinClick}>
            <img 
              src="/assets/icons/coin.svg" 
              alt="Coin" 
              className="coin-drop__icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDrop;
