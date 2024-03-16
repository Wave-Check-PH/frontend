import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

interface VideoPlayerProps {
    src: string;
    style: React.CSSProperties;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, style }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(src);
            if (videoRef.current) {
                hls.attachMedia(videoRef.current);
            }
            return () => {
                hls.destroy();
            };
        } else if (videoRef.current && videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
            videoRef.current.src = src;
        }
    }, [src]);

    return <video style={style} ref={videoRef} controls autoPlay />;
};

export default VideoPlayer;
