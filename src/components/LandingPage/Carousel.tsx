import 'swiper/css';

import 'swiper/css/free-mode';
import "./Carousel.scss"
import SurfTown from '../../interfaces/SurfTown';
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from '@mui/material';
import ComingSoonPhoto from '../../img/coming-soon.jpg';
interface CustomCarouselProps {
    locations: SurfTown[];
    setCamIndex: (index: string) => void;
    surftownIndex: number;
    setDrawerOpen: (open: boolean) => void;
}
const CustomCarousel: React.FC<CustomCarouselProps> = ({ locations, setCamIndex, surftownIndex, setDrawerOpen }) => {
    const [emblaRef] = useEmblaCarousel();

    const onCamClick = (index: number) => {
        console.log("run");
        setDrawerOpen(true);
        setCamIndex(index.toString());
        const element = document.getElementById('surf-cam-player-anchor');
        console.log(element);
        element?.scrollIntoView({
            behavior: 'smooth',
            block:"start",
        }); 
    };

    const items = locations[surftownIndex].cams.map((cam, index) => (
        <Button

            variant='text'
            key={index}
            style={{
            backgroundSize: cam.comingSoon ? "cover" : "cover", width: "256px", backgroundImage: `url(${cam.comingSoon ? ComingSoonPhoto : cam.image})` }}
            className="carousel-item"
            onClick={() => onCamClick(index)}
        >
            <p className="legend">
                {cam.name}
            </p>
                {cam.comingSoon ? (
            <div className="coming-soon-thumbnail">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.6" width="44" height="44" rx="22" fill="grey" />
                        <path fill="grey" d="M20 15L28 22L20 29V15Z" />
                        <line x1="10" y1="34" x2="34" y2="10" stroke="grey" strokeWidth="2" strokeLinecap="round" />
                    </svg>
            </div>
                ) : (
                    <div className="video-thumbnail">
                    <div className="play-surf-cam-container">
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.6" width="44" height="44" rx="22" fill="grey" />
                            <path fill="grey" d="M20 15L28 22L20 29V15Z" />
                        </svg>
                        </div>
                        </div>
                )}
        </Button>
    ));

    return (
        <div className="custom-carousell-container" style={{ width: "100%" }}>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {items.map((item) => (
                        <div key={item.key} className="embla__slide">{item}</div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};
export default CustomCarousel;