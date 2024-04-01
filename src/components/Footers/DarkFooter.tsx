/*eslint-disable*/
import React from "react";
import BagongPilipinasLogo from "../../img/bagongPilipinas.png"

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer>
      <div style={{ marginTop: "80vh", width: "100%", display: 'flex', justifyContent: "start", flexDirection: 'row' }}>
        <img style={{ height: "80px" }} src={BagongPilipinasLogo} alt="Bagong Pilipinas" />
      </div>
    </footer>
  );
}

export default DarkFooter;
