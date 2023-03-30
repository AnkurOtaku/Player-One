import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import entryImage from '../images/entry.jpg';
import console_area_half from '../images/console-area-half.jpg';
import console_area from '../images/console-area.jpg';
import pc_area from '../images/pc-area.jpg';
import two_pc_setup from '../images/two-pc-setup.jpg';

const images = [
    { id: 1, src: entryImage },
    { id: 2, src: console_area_half },
    { id: 3, src: console_area },
    { id: 4, src: pc_area },
    { id: 5, src: two_pc_setup }
];

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    pauseOnHover: true
};

const Carousel = () => {
    const [nav1, setNav1] = useState(null);

    return (
        <div className="max-w-screen-lg mx-auto my-4">
            <Slider
                {...settings}
                asNavFor={nav1}
                ref={slider => setNav1(slider)}
            >
                {images.map(image => (
                    <div key={image.id}>
                        <img src={image.src} alt={`Entry ${image.id}`} className='object-cover' />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;