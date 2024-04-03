import React, { ReactNode, useEffect } from 'react';
import LandingSection from './components/LandingPage/LandingSection';
import DarkFooter from "./components/Footers/DarkFooter";
import NavBarMain from "./components/NavbarMain";
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import HistoryPage from './pages/History';
import AboutPage from './pages/About';
import customTheme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import LoginPage from './pages/Login';
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCeN1EfXoGvYiVRtb3TYsTaJWg-AK-KhVg",
  authDomain: "phsurfcam.firebaseapp.com",
  projectId: "phsurfcam",
  storageBucket: "phsurfcam.appspot.com",
  messagingSenderId: "1022223286434",
  appId: "1:1022223286434:web:f9a969eba14adcb7ad97fb"
};
initializeApp(firebaseConfig);

function App() {
    const auth = getAuth();
  const [loggedIn] = useAuthState(auth);
  const PrivateComponent = ({ element }: { element: ReactNode }) => {
  return loggedIn ? <>{element}</> : <Navigate to="/login" />;
};

  return (
    <ThemeProvider theme={customTheme}>
      <NavBarMain loggedIn={!!loggedIn} />
      <div className="navbar-spacer">
        <Routes>
          <Route path="/" element={<LandingSection />} />
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/history" element={<PrivateComponent element={<HistoryPage/>}/>} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <DarkFooter />
    </ThemeProvider>
  );
}

export default App;