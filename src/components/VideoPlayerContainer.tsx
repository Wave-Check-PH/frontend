import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer'; // Assuming VideoPlayer component is defined in VideoPlayer.js
import { FaPlay } from "react-icons/fa";
import SurfMaidLogo from "../img/surfmaidlogo.png";

import PlayCircleIcon from '@mui/icons-material/PlayCircle';

interface VideoPlayerProps {
    src: string;
    style: React.CSSProperties;
}


const VideoPlayerContainer: React.FC<VideoPlayerProps> = ({ src, style }) => {
    const [showVideo, setShowVideo] = useState(false);
    const bottomBarHeight = 100;
    const windowWidth = window.innerWidth * 0.5;
    const calculatedWidth = windowWidth * 0.5625;
    const defaultStyle: React.CSSProperties = {
        width: windowWidth,
        height: calculatedWidth,
    };
    const handleClick = () => {
        setShowVideo(true);
    };

    return (
        <div style={defaultStyle}>
            {showVideo ? (
                <VideoPlayer style={defaultStyle} src="http://wavecheck.ph:8080/memfs/810e6686-8bf7-4220-a489-281992ab5421.m3u8" />
            ) : (
                <div onClick={handleClick} style={{ ...defaultStyle, border: '1px solid black', display: 'flex', flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                    {/* <button onClick={handleClick}>Show Video</button> */}
                    <h1>Press to play</h1>
                    <PlayCircleIcon fontSize="large" />
                </div>
            )}
            <div onClick={handleClick} style={{ width: windowWidth, height: bottomBarHeight + "px", border: '1px solid black', borderTop: 0, display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ marginLeft: 10 }}>Hosted By</div>
                <img style={{ height: (bottomBarHeight - 10) + "px" }} src={SurfMaidLogo} />
            </div>
        </div>
    );
};

export default VideoPlayerContainer;