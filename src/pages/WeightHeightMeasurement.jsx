import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/pages/_weight-height-measurement.scss';

const WeightHeightMeasurement = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleWeightChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setWeight(value);
    }
  };

  const handleHeightChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setHeight(value);
    }
  };

  const handleFinish = () => {
    // Save weight and height measurements
    localStorage.setItem('weight', weight);
    localStorage.setItem('height', height);
    
    // Check if we're in "all measurements" mode
    const isAllMeasurementsMode = localStorage.getItem('isAllMeasurementsMode') === 'true';
    
    if (isAllMeasurementsMode) {
      // Get next measurement from queue
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

  const hasBothValues = weight !== '' && parseFloat(weight) > 0 && height !== '' && parseInt(height) > 0;

  return (
    <div className="weight-height-measurement">
      <div className="weight-height-measurement__container">
        <div className="weight-height-measurement__content">
          <div className="weight-height-measurement__instructions">
            <p className="weight-height-measurement__text">
              Og'irlik hamda boʻy oʻlchanmoqda.
            </p>
            <p className="weight-height-measurement__text">
              Iltimos qaddingizni rostlagan holda to'g'riga qarab turing
            </p>
          </div>

          <div className="weight-height-measurement__display">
            <div className="weight-height-measurement__display-box">
              <h3 className="weight-height-measurement__display-title">Og'irlik va bo'y</h3>
              <div className="weight-height-measurement__display-content">
                <div className="weight-height-measurement__display-row">
                  <img 
                    src="/assets/icons/weight_b.svg" 
                    alt="Weight" 
                    className="weight-height-measurement__display-icon"
                  />
                  <input
                    type="text"
                    className="weight-height-measurement__display-value"
                    value={weight}
                    onChange={handleWeightChange}
                    placeholder="--"
                    inputMode="decimal"
                  />
                  <span className="weight-height-measurement__display-unit">kg</span>
                </div>
                <div className="weight-height-measurement__display-row">
                  <img 
                    src="/assets/icons/height_b.svg" 
                    alt="Height" 
                    className="weight-height-measurement__display-icon"
                  />
                  <input
                    type="text"
                    className="weight-height-measurement__display-value"
                    value={height}
                    onChange={handleHeightChange}
                    placeholder="--"
                    inputMode="numeric"
                  />
                  <span className="weight-height-measurement__display-unit">sm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="weight-height-measurement__illustration">
            <img 
              src="/assets/imgs/height.svg" 
              alt="Weight and height measurement" 
              className="weight-height-measurement__image"
            />
          </div>

          {hasBothValues && (
            <div className="weight-height-measurement__button-wrapper">
              <Button 
                onClick={handleFinish} 
                className="weight-height-measurement__button"
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

export default WeightHeightMeasurement;
