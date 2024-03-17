import React from 'react';

import HangInTheGif from "../../img/hanginthere.jpg"
import GlobeLogo from "../../img/globe.png"

function InProgress() {
    return (


        <div className="container">
            <div className="footnote">
                <p>This is a super early prototype, just so people can use the Point cam.
                    Please be patient, we're still building this thing</p>
                <p>If you have any spots that you want added to this site or just have any questions, please email</p>
                <p>If you want to add any spots, or have any questions, please email below</p>
                <p>wavecheckph@proton.me</p>
                <br />
                <br />
                <br />
                <p>Ginawa itong prototype para magamit na yung Point cam. Paki hintay lang habang inaayos parin</p>
                <p>Kung may spot na gusto mong ipa-dagdag or may mga Katanungan, paki email sa </p>
                <p>wavecheckph@proton.me</p>
                <br />
                <img style={{ objectFit: 'contain', height: "400px", marginBottom: "500px" }} src={HangInTheGif} alt="Hang in there" />
            </div>
        </div>


    );
}

export default InProgress;