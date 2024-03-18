import React from 'react';
import LandingSection from './components/LandingPage/LandingSection';

// core components
import DarkFooter from "./components/Footers/DarkFooter";

import NavBarMain from "./components/NavbarMain";
import './App.css';


function App() {
  return (
    <>
      <NavBarMain />
      <LandingSection />

      <DarkFooter />
    </>


  );
}

export default App;
