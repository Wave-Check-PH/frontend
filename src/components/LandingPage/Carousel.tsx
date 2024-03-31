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
}
const CustomCarousel: React.FC<CustomCarouselProps> = ({ locations, setCamIndex, surftownIndex }) => {
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

    const items = locations[surftownIndex].cams.map((cam, index) => (
        <div
            key={index}
            style={{ width: "256px", backgroundImage: `url(${cam.image})` }}
            className="carousel-item"
            onClick={() => setCamIndex(index.toString())}
        >
            <p style={{ position: 'absolute' }} className="legend">
                {cam.name}
            </p>
            <div className="coming-soon-container">
                {cam.comingSoon ? (
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" width="44" height="44" rx="22" fill="white" />
                        <path fill="white" d="M20 15L28 22L20 29V15Z" />
                        <line x1="10" y1="34" x2="34" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                ) : (
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" width="44" height="44" rx="22" fill="white" />
                        <path fill="white" d="M20 15L28 22L20 29V15Z" />
                    </svg>
                )}
            </div>
        </div>
    ));

    return (
        <div className="custom-carousell-container" style={{ width: "100%" }}>
            <Swiper
                spaceBetween={50}
                slidesPerView={slidesPerView}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                // @ts-ignore
                onSwiper={(swiper) => console.log(swiper)}
            >
                {items.map((item) => (
                    <SwiperSlide>{item}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default CustomCarousel;