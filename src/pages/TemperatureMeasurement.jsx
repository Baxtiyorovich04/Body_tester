import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/pages/_temperature-measurement.scss';

const TemperatureMeasurement = () => {
  const navigate = useNavigate();
  const [temperature, setTemperature] = useState('');

  const handleTemperatureChange = (e) => {
    const value = e.target.value;
    // Allow empty string or valid numbers with decimal
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setTemperature(value);
    }
  };

  const handleFinish = () => {
    navigate('/success');
  };

  const hasTemperature = temperature !== '' && parseFloat(temperature) > 0;

  return (
    <div className="temperature-measurement">
      <div className="temperature-measurement__container">
        <div className="temperature-measurement__content">
          <div className="temperature-measurement__instructions">
            <p className="temperature-measurement__text">
              Iltimos tana haroratingizni o'lchash uchun ko'rsatilgan joyga peshonangizni tuting
            </p>
          </div>

          <div className="temperature-measurement__display">
            <div className="temperature-measurement__display-box">
              <h3 className="temperature-measurement__display-title">Tana harorati</h3>
              <div className="temperature-measurement__display-content">
                <img 
                  src="/assets/icons/temperature_b.svg" 
                  alt="Temperature" 
                  className="temperature-measurement__display-icon"
                />
                <input
                  type="text"
                  className="temperature-measurement__display-value"
                  value={temperature}
                  onChange={handleTemperatureChange}
                  placeholder="--"
                  inputMode="decimal"
                />
                <span className="temperature-measurement__display-unit">°C</span>
              </div>
            </div>
          </div>

          <div className="temperature-measurement__illustration">
            <img 
              src="/assets/imgs/temperature.svg" 
              alt="Temperature measurement" 
              className="temperature-measurement__image"
            />
          </div>

          {hasTemperature && (
            <div className="temperature-measurement__button-wrapper">
              <Button 
                onClick={handleFinish} 
                className="temperature-measurement__button"
              >
                Tugatish
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemperatureMeasurement;
