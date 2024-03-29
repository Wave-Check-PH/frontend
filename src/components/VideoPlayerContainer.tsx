import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer'; // Assuming VideoPlayer component is defined in VideoPlayer.js
import "./VideoPlayerContainer.scss";
import Cam from "../interfaces/Cam";
import HangInTherePhoto from "../img/hanginthere.jpg";

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Card, useTheme } from '@mui/material';

interface VideoPlayerProps {
    cam: Cam;
}

const VideoPlayerContainer: React.FC<VideoPlayerProps> = ({ cam }) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Assume desktop if width > 768px
    const [showVideo, setShowVideo] = useState(false);
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

    const theme = useTheme();

    const defaultStyle: React.CSSProperties = {
        width: windowWidth,
        height: calculatedHeight,
    };

    const handleClick = () => {
        setShowVideo(true);
    };

    return (
        <Card className='video-card'>
            <div >
                {
                    cam.comingSoon ?
                        <div className='coming-soon' style={{ ...defaultStyle, marginBottom: 116 }}>
                            <p>Coming soon</p>
                            <img src={HangInTherePhoto} alt="Hang in there" style={{ height: calculatedHeight + 20, objectFit: "fill" }} />
                        </div> :
                        <>
                            {showVideo ? (
                                <>
                                    <VideoPlayer style={defaultStyle} src={cam.src} />
                                </>
                            ) : (
                                <div style={{ ...defaultStyle, backgroundColor: theme.palette.secondary.main }} onClick={handleClick} className="prevideo-window">
                                    <h4>Press to play</h4>
                                    <PlayCircleIcon fontSize="large" />
                                </div>
                            )}
                            <div onClick={handleClick} className="host-section">
                                <div style={{ marginLeft: 10 }}><h4>Hosted By</h4></div>
                                <a className='host-tag' href={cam.hostWebsite}><img alt="host logo" style={{ height: (bottomBarHeight - 10) + "px" }} src={cam.hostLogo} /></a>
                            </div>
                        </>
                }
            </div>
        </Card>
    );
};

export default VideoPlayerContainer;
