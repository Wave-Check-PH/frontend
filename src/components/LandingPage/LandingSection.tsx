import React from 'react';

// styles for this kit
import "../../assets/css/bootstrap.min.css";
import "../../assets/scss/now-ui-kit.scss?v=1.5.0";
import "../../assets/demo/demo.css?v=1.5.0";
import "../../assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

// core components
import IndexHeader from "../Headers/IndexHeader";
import LandingContent from "./LandingContent";
import InProgress from './InProgress';


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
            <div className="wrapper">
                <IndexHeader />
                <div className="main">
                    <LandingContent />
                    <InProgress />
                </div>

            </div>
        </>

    );
}

export default LandingSection;
