import React from 'react';
import VideoPlayerContainer from '../VideoPlayerContainer';

// styles for this kit
import "../../assets/css/bootstrap.min.css";
import "../../assets/scss/now-ui-kit.scss?v=1.5.0";
import "../../assets/demo/demo.css?v=1.5.0";
import "../../assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

// core components
import NavBarMain from "../NavbarMain";
import IndexHeader from "../Headers/IndexHeader";
import DarkFooter from "../Footers/DarkFooter";
import Images from "./Images";

import HangInTheGif from "./img/hanginthere.jpg"
import GlobeLogo from "./img/globe.png"

import logo from './logo.svg';


function LandingSection() {

    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("index-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <>
            <NavBarMain />
            <div className="wrapper">
                <IndexHeader />
                <div className="main">
                    <Images />
                    {/* <Images />
          <BasicElements /> */}
                </div>
                <DarkFooter />
            </div>
        </>

    );
}

export default LandingSection;
