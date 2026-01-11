import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import AgeInput from './pages/AgeInput';

function App() {
  return (
    <Router>
      <div className="App">
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/age-input" element={<AgeInput />} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
}

export default App;
