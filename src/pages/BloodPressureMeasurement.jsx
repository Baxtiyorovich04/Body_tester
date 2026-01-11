import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/pages/_blood-pressure-measurement.scss';

const BloodPressureMeasurement = () => {
  const navigate = useNavigate();
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [pulse, setPulse] = useState('');
  const [showKiydim, setShowKiydim] = useState(false);
  const [cuffWorn, setCuffWorn] = useState(false);

  useEffect(() => {
    // Show "Kiydim" button after 3 seconds
    const timer = setTimeout(() => {
      setShowKiydim(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSystolicChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setSystolic(value);
    }
  };

  const handleDiastolicChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setDiastolic(value);
    }
  };

  const handlePulseChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setPulse(value);
    }
  };

  const handleKiydim = () => {
    setCuffWorn(true);
  };

  const handleNext = () => {
    navigate('/success');
  };

  const hasAllValues = cuffWorn && systolic !== '' && parseInt(systolic) > 0 && 
                       diastolic !== '' && parseInt(diastolic) > 0 && 
                       pulse !== '' && parseInt(pulse) > 0;

  return (
    <div className="blood-pressure-measurement">
      <div className="blood-pressure-measurement__container">
        <div className="blood-pressure-measurement__content">
          <div className="blood-pressure-measurement__instructions">
            <p className="blood-pressure-measurement__text">
              Iltimos qon bosimi va puls miqdorini o'lchash uchun ko'rsatilgan uslubda bosm qopchasini qo'lingizga kiying
            </p>
          </div>

          <div className="blood-pressure-measurement__display">
            <div className="blood-pressure-measurement__display-box">
              <div className="blood-pressure-measurement__display-section">
                <h3 className="blood-pressure-measurement__display-title">Qon bosimi</h3>
                <div className="blood-pressure-measurement__display-content">
                  <img 
                    src="/assets/icons/bloodPressure_b.svg" 
                    alt="Blood pressure" 
                    className="blood-pressure-measurement__display-icon"
                  />
                  <input
                    type="text"
                    className="blood-pressure-measurement__display-value"
                    value={systolic}
                    onChange={handleSystolicChange}
                    placeholder="--"
                    inputMode="numeric"
                    disabled={!cuffWorn}
                  />
                  <span className="blood-pressure-measurement__display-separator">/</span>
                  <input
                    type="text"
                    className="blood-pressure-measurement__display-value"
                    value={diastolic}
                    onChange={handleDiastolicChange}
                    placeholder="--"
                    inputMode="numeric"
                    disabled={!cuffWorn}
                  />
                  
                </div>
                <span className="blood-pressure-measurement__display-unit">mmHg</span>
              </div>
              
              <div className="blood-pressure-measurement__display-section">
                <h3 className="blood-pressure-measurement__display-title">Puls miqdori</h3>
                <div className="blood-pressure-measurement__display-content">
                  <img 
                    src="/assets/icons/bloodOxygen_b.svg" 
                    alt="Pulse" 
                    className="blood-pressure-measurement__display-icon"
                  />
                  <input
                    type="text"
                    className="blood-pressure-measurement__display-value"
                    value={pulse}
                    onChange={handlePulseChange}
                    placeholder="--"
                    inputMode="numeric"
                    disabled={!cuffWorn}
                  />
                  <span className="blood-pressure-measurement__display-unit">bpm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="blood-pressure-measurement__illustration">
            <img 
              src="/assets/imgs/pressure.svg" 
              alt="Blood pressure measurement" 
              className="blood-pressure-measurement__image"
            />
          </div>

          <div className="blood-pressure-measurement__buttons">
            {showKiydim && !cuffWorn && (
              <Button 
                onClick={handleKiydim} 
                className="blood-pressure-measurement__button blood-pressure-measurement__button--kiydim"
              >
                Kiydim
              </Button>
            )}
            
            {hasAllValues && (
              <Button 
                onClick={handleNext} 
                className="blood-pressure-measurement__button blood-pressure-measurement__button--next"
              >
                Keyingi
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureMeasurement;
