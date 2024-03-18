import React from 'react';
import LandingSection from './components/LandingPage/LandingSection';

// core components
import DarkFooter from "./components/Footers/DarkFooter";

import NavBarMain from "./components/NavbarMain";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HistoryPage from './pages/HistoryPage';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <>
      <NavBarMain />
      <div className='navbar-spacer' />
      <Routes>
        <Route path="/" element={<LandingSection />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <DarkFooter />
    </>


  );
}

export default App;
