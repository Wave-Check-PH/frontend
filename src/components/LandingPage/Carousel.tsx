// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "./Carousel.scss"
import SurfTown from '../../interfaces/SurfTown';
import { useEffect, useState } from 'react';

interface CustomCarouselProps {
    locations: SurfTown[];
    setCamIndex: (index: string) => void;
    surftownIndex: number;
    setDrawerOpen: (open: boolean) => void;
}
const CustomCarousel: React.FC<CustomCarouselProps> = ({ locations, setCamIndex, surftownIndex, setDrawerOpen }) => {
    const [slidesPerView, setSlidesPerView] = useState(4);
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth * 0.95;
            const newSlidesPerView = Math.floor(screenWidth / 256);
            setSlidesPerView(newSlidesPerView);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call to set the slidesPerView based on initial window size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const onCamClick = (index: number) => {
        setDrawerOpen(true);
        setCamIndex(index.toString());
        const element = document.getElementById('surf-cam-player');
        element?.scrollIntoView({
            behavior: 'smooth',
            // block: "start",
            block:"start"
        }); 
    };

    const items = locations[surftownIndex].cams.map((cam, index) => (
        <div
            key={index}
            style={{ width: "256px", backgroundImage: `url(${cam.image})` }}
            className="carousel-item"
            onClick={() => onCamClick(index)}
        >
            <p style={{ position: 'absolute', top:160, backgroundColor: "rgba(0,0,0,0.3)", width: "100%",textAlign: "center" }} className="legend">
                {cam.name}
            </p>
                {cam.comingSoon ? (
            <div className="coming-soon-container">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.6" width="44" height="44" rx="22" fill="grey" />
                        <path fill="grey" d="M20 15L28 22L20 29V15Z" />
                        <line x1="10" y1="34" x2="34" y2="10" stroke="grey" strokeWidth="2" strokeLinecap="round" />
                    </svg>
            </div>
                ) : (
                    <div className="play-surf-cam-container"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.6" width="44" height="44" rx="22" fill="grey" />
                        <path fill="grey" d="M20 15L28 22L20 29V15Z" />
                    </svg></div>
                )}
        </div>
    ));

    return (
        <div className="custom-carousell-container" style={{ width: "100%" }}>
            <Swiper
                spaceBetween={50}
                slidesPerView={slidesPerView}
                pagination={{ clickable: true }}
                // @ts-ignore
                onSwiper={(swiper) => console.log(swiper)}
            >
                {items.map((item) => (
                    <SwiperSlide>{item}</SwiperSlide>
                ))}

                <div id="surf-cam-player" />
            </Swiper>

        </div>
    );
};
export default CustomCarousel;