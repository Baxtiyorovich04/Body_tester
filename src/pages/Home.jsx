import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/age-input');
  };

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__content">
          <h1 className="home__title">Body Tester</h1>
          <p className="home__subtitle">Cosmos innovatsion</p>
          <p className="home__tagline">"Innovatsion kelajakni biz bilan birga quring"</p>
          <div className="home__button-wrapper">
            <Button onClick={handleStart} className="home__button">
              START
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
