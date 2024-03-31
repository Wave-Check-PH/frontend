import React from 'react';
import LandingSection from './components/LandingPage/LandingSection';

// core components
import DarkFooter from "./components/Footers/DarkFooter";

import NavBarMain from "./components/NavbarMain";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HistoryPage from './pages/HistoryPage';
import AboutPage from './pages/AboutPage';
import customTheme from './theme';
import { ThemeProvider } from '@mui/material/styles';



function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <NavBarMain />
      <div className='navbar-spacer' />
      <Routes>
        <Route path="/" element={<LandingSection />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <DarkFooter />
    </ThemeProvider>


  );
}

export default App;
