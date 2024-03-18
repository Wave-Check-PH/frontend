import React from 'react';

import HangInTheGif from "./img/hanginthere.jpg"
import GlobeLogo from "./img/globe.png"

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
        <div className="content">
          <h3 className="content-title">La Union - Point</h3>
          <p className="content-description">

          </p>
        </div>
        <div className="footnote">
          <p>This is a super early prototype, just so people can use the Point cam</p>
          <p>Please bear with, we're still building this thing</p>
          <p>If you have any spots that you want added to this site or just have any questions, please email</p>
          <p>If you want to add any spots, help with the design of the website, or have any questions, please email below</p>
          <p>wavecheckph@proton.me</p>
          <br />
          <p>Ginawa itong prototype para magamit na yung Point cam</p>
          <p>Paki hintay lang habang inaayos parin</p>
          <p>Kung may spot na gusto mong ipa-dagdag, tulong sa design nang website or may mga Katanungan, paki email sa </p>
          <p>wavecheckph@proton.me</p>
        </div>
      </div>


    </div>

  );
}

export default App;
