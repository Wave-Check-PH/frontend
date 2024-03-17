import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer'; // Assuming VideoPlayer component is defined in VideoPlayer.js
import { FaPlay } from "react-icons/fa";
import SurfMaidLogo from "../img/surfmaidlogo.png";
import Cam from "../interfaces/Cam";

import PlayCircleIcon from '@mui/icons-material/PlayCircle';

interface VideoPlayerProps {
    cam: Cam;
    className?: string;
}


const VideoPlayerContainer: React.FC<VideoPlayerProps> = ({ cam, className }) => {
    const [showVideo, setShowVideo] = useState(false);
    const bottomBarHeight = 100;
    let windowWidth = window.innerWidth * 0.5;

    if (window.innerWidth < 768) {
        windowWidth = window.innerWidth * 0.8
    }
    const calculatedHeight = windowWidth * 0.5625;

    const defaultStyle: React.CSSProperties = {
        width: windowWidth,
        height: calculatedHeight,
    };
    const handleClick = () => {
        setShowVideo(true);
    };

    return (
        <div className={className} style={defaultStyle}>
            {cam.comingSoon ? <p>Coming soon</p> : <>
                {showVideo ? (
                    <VideoPlayer style={defaultStyle} src={cam.src} />
                ) : (
                    <div onClick={handleClick} style={{ ...defaultStyle, border: '1px solid black', display: 'flex', flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                        <h1>Press to play</h1>
                        <PlayCircleIcon fontSize="large" />
                    </div>
                )}
                <div onClick={handleClick} style={{ width: windowWidth, height: bottomBarHeight + "px", border: '1px solid black', borderTop: 0, display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ marginLeft: 10 }}>Hosted By</div>
                    <a href={cam.hostWebsite}><img style={{ height: (bottomBarHeight - 10) + "px" }} src={cam.hostLogo} /></a>
                </div>
            </>}
        </div>
    );
};

export default VideoPlayerContainer;