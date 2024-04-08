import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const items = [
    <div className="item" data-value="1"> <img src="images/11.png" alt="logo" style={{}} /></div>,
    // <div className="item" data-value="1"> <img src="images/1.png" alt="logo" style={{}} /></div>,
    // <div className="item" data-value="2"><img src="images/7.png" alt="logo" /></div>,
];

const MainCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        autoPlayInterval={5000}
        infinite
    />
);

export default MainCarousel;