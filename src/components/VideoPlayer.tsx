import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

interface VideoPlayerProps {
    src: string;
    style: React.CSSProperties;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, style }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [error, setError] = React.useState<Error | null>(null);

    useEffect(() => {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(src);
            if (videoRef.current) {
                hls.attachMedia(videoRef.current);
            }
            hls.on(Hls.Events.ERROR, (event, data) => {
                if (data.fatal) {
                    const errorMessage = `HLS playback error: ${data.type} - ${data.details}`;
                    const error = new Error(errorMessage);
                    setError(error);
                    // if (onError) {
                    //     onError(error);
                    // }
                }
            });
            return () => {
                hls.destroy();
            };
        } else if (videoRef.current && videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
            videoRef.current.src = src;
        }
    }, [src]);

    if (error) {
        console.error(error);
        return <div style={{ ...style, alignContent: "center", display: 'flex', flexDirection: 'row', justifyContent: "center" }}><p>Failed to load video</p></div>;
    }

    return (
        <video
            ref={videoRef}
            controls
            style={style}
        />
    );
};

export default VideoPlayer;
