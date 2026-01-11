import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import Button from '../components/Button';
import '../styles/pages/_success.scss';

const Success = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="success">
      <div className="success__container">
        <div className="success__content">
          <h2 className="success__message">
            Barcha amallar muvaffaqiyatli bajarildi iltimos chekni oling
          </h2>
          
          <div className="success__icon-wrapper">
            <div className="success__icon-circle">
              <FaCheck className="success__icon" />
            </div>
          </div>
          
          <div className="success__button-wrapper">
            <Button 
              onClick={handleHome} 
              className="success__button"
            >
              BOSH SAHIFA
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
