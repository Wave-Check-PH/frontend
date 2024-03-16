import React from 'react';
import VideoPlayerContainer from './components/VideoPlayerContainer';
import HangInTheGif from "./img/hanginthere.gif"
import GlobeLogo from "./img/globe.png"

import { ChakraProvider } from '@chakra-ui/react'
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <ChakraProvider>
      <div className="container">
        <h1 className="title">Wave Check PH</h1>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
          <h2 className="subtitle">Powered by</h2>
          <img src={GlobeLogo} alt="Globe Telecom Logo" width="100" />
        </div>
        <div className="content">
          <h3 className="content-title">La Union - Point</h3>
          <p className="content-description">
            <VideoPlayerContainer style={{}} src='http://wavecheck.ph:8080/memfs/810e6686-8bf7-4220-a489-281992ab5421.m3u8' />
          </p>
        </div>
        <div className="footnote">
          <p>This is a super early prototype, just so people can use the Point cam</p>
          <p>Please bear with while we try and improve</p>
          <p>If you have any spots that you want added to this site or just have any questions, please email</p>
          <p>wavecheckph@proton.me</p>
          <br />
          <p>Hindi pa ito tapos, ginawa itong prototype para makagamit na yung Point cam</p>
          <p>Paki hintay lang habang inaayos parin</p>
          <p>Kung may bagong spot na gusto mong idagdag or may tanong lang, paki email dito pls</p>
          <p>wavecheckph@proton.me</p>
          <br />
          <img src={HangInTheGif} alt="Hang in there" width="250" />
        </div>
      </div>


    </ChakraProvider>

  );
}

export default App;
