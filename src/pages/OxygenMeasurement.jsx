import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/pages/_oxygen-measurement.scss';

const OxygenMeasurement = () => {
  const navigate = useNavigate();
  const [oxygen, setOxygen] = useState('');

  const handleOxygenChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setOxygen(value);
    }
  };

  const handleFinish = () => {
    // Save oxygen measurement
    localStorage.setItem('oxygen', oxygen);
    
    const isAllMeasurementsMode = localStorage.getItem('isAllMeasurementsMode') === 'true';
    
    if (isAllMeasurementsMode) {
      const measurementQueue = JSON.parse(localStorage.getItem('measurementQueue') || '[]');
      const currentIndex = parseInt(localStorage.getItem('currentMeasurementIndex') || '0');
      const nextIndex = currentIndex + 1;
      
      if (nextIndex < measurementQueue.length) {
        // Navigate to next measurement
        localStorage.setItem('currentMeasurementIndex', nextIndex.toString());
        const nextMeasurement = measurementQueue[nextIndex];
        navigate(`/measurement/${nextMeasurement}`);
      } else {
        // All measurements done, go to success
        localStorage.removeItem('measurementQueue');
        localStorage.removeItem('currentMeasurementIndex');
        localStorage.removeItem('isAllMeasurementsMode');
        navigate('/success');
      }
    } else {
      navigate('/success');
    }
  };

  const hasOxygen = oxygen !== '' && parseInt(oxygen) > 0;

  return (
    <div className="oxygen-measurement">
      <div className="oxygen-measurement__container">
        <div className="oxygen-measurement__content">
          <div className="oxygen-measurement__instructions">
            <p className="oxygen-measurement__text">
              Iltimos qondagi kislorod miqdorini o'lchash uchun belgilangan joyga ko'rsatkich barmog'ingizni kiriting
            </p>
          </div>

          <div className="oxygen-measurement__display">
            <div className="oxygen-measurement__display-box">
              <h3 className="oxygen-measurement__display-title">Kislorod miqdori</h3>
              <div className="oxygen-measurement__display-content">
                <img 
                  src="/assets/icons/amountOfOxyghen.svg" 
                  alt="Oxygen" 
                  className="oxygen-measurement__display-icon"
                />
                <input
                  type="text"
                  className="oxygen-measurement__display-value"
                  value={oxygen}
                  onChange={handleOxygenChange}
                  placeholder="--"
                  inputMode="numeric"
                />
                <span className="oxygen-measurement__display-unit">%</span>
              </div>
            </div>
          </div>

          <div className="oxygen-measurement__illustration">
            <img 
              src="/assets/imgs/blood_test_finger.webp" 
              alt="Blood oxygen measurement" 
              className="oxygen-measurement__image"
            />
          </div>

          {hasOxygen && (
            <div className="oxygen-measurement__button-wrapper">
              <Button 
                onClick={handleFinish} 
                className="oxygen-measurement__button"
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

export default OxygenMeasurement;
