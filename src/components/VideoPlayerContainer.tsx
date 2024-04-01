import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer'; // Assuming VideoPlayer component is defined in VideoPlayer.js
import "./VideoPlayerContainer.scss";
import Cam from "../interfaces/Cam";
import HangInTherePhoto from "../img/hanginthere.jpg";

import { Card } from '@mui/material';

interface VideoPlayerProps {
    cam: Cam;
}

const VideoPlayerContainer: React.FC<VideoPlayerProps> = ({ cam }) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Assume desktop if width > 768px
    const [windowWidth, setWindowWidth] = useState(window.innerWidth * (isDesktop ? 0.6 : 0.9)); // Initialize with initial width
    const bottomBarHeight = 100;

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1024);
            setWindowWidth(window.innerWidth * (isDesktop ? 0.6 : 0.9)); // Update width on resize
        };

        window.addEventListener('resize', handleResize); // Listen for resize event

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up event listener on unmount
        };
    }, [isDesktop]); // Include isDesktop in dependency array

    const calculatedHeight = windowWidth * 0.5625;

    const defaultStyle: React.CSSProperties = {
        width: windowWidth,
        height: calculatedHeight,
    };

    return (
        <Card
            elevation={0}
         className='video-card'>
                {
                    cam.comingSoon ?
                        <div className='coming-soon' style={{ ...defaultStyle, marginBottom: 116 }}>
                            <p>Coming soon</p>
                            <img src={HangInTherePhoto} alt="Hang in there" style={{ height: calculatedHeight + 20, objectFit: "fill" }} />
                        </div> : 
                        <div>
                        <VideoPlayer style={{ ...defaultStyle }} src={cam.src} />
                        <div className="host-section">
                            <div style={{ marginLeft: 10 }}>
                                <h4>Hosted By</h4>
                            </div>
                            <a className='host-tag' href={cam.hostWebsite}>
                                <img alt="host logo" style={{ height: (bottomBarHeight - 10) + "px" }} src={cam.hostLogo} />
                            </a>
                        </div>
                        </div>
                }
        </Card>
    );
};

export default VideoPlayerContainer;
