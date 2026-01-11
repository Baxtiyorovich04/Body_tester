import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import AgeInput from './pages/AgeInput';
import CoinDrop from './pages/CoinDrop';
import Selection from './pages/Selection';

function App() {
  return (
    <Router>
      <div className="App">
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/age-input" element={<AgeInput />} />
            <Route path="/coin-drop" element={<CoinDrop />} />
            <Route path="/selection" element={<Selection />} />
            <Route path="/measurement/weight-height" element={<div>Weight & Height Measurement</div>} />
            <Route path="/measurement/temperature" element={<div>Temperature Measurement</div>} />
            <Route path="/measurement/oxygen" element={<div>Blood Oxygen Measurement</div>} />
            <Route path="/measurement/blood-pressure" element={<div>Blood Pressure & Pulse Measurement</div>} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
}

export default App;
