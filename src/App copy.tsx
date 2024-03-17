import React from 'react';
import VideoPlayerContainer from './components/VideoPlayerContainer';

import HangInTheGif from "./img/hanginthere.jpg"
import GlobeLogo from "./img/globe.png"

import logo from './logo.svg';
import './App.css';
import TabsContainerPlayer from './components/TabsContainer';


function App() {
  return (

    <div >
      <div className="container">
        <h1 className="title">Wave Check PH</h1>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
          <h2 className="subtitle">Powered by</h2>
          <img src={GlobeLogo} alt="Globe Telecom Logo" width="100" />
        </div>
        <TabsContainerPlayer />
        <div className="content">
          <h3 className="content-title">La Union - Point</h3>
          <p className="content-description">
            <VideoPlayerContainer style={{}} src='http://wavecheck.ph:8080/memfs/810e6686-8bf7-4220-a489-281992ab5421.m3u8' />
          </p>
        </div>
        <div className="footnote">
          <p>This is a super early prototype, just so people can use the Point cam</p>
          <p>Please bear with, we're still building this thing</p>
          <p>If you have any spots that you want added to this site or just have any questions, please email</p>
          <p>If you want to add any spots, or have any questions, please email below</p>
          <p>wavecheckph@proton.me</p>
          <br />
          <p>Ginawa itong prototype para magamit na yung Point cam</p>
          <p>Paki hintay lang habang inaayos parin</p>
          <p>Kung may spot na gusto mong ipa-dagdag or may mga Katanungan, paki email sa </p>
          <p>wavecheckph@proton.me</p>
          <br />
          <img src={HangInTheGif} alt="Hang in there" />
        </div>
      </div>


    </div>

  );
}

export default App;
