import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import GradeIcon from '@mui/icons-material/Grade';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    // 1
    <div className="item hover:shadow-2xl bg-white  mt-[100px] mb-[50px] border border-gray-200 rounded m-[10px] " data-value="1">

        <img

            src="images/56.avif"
            alt="asd"
        />

    </div>,
    //2
    <div className="item hover:shadow-2xl bg-white  mt-[100px] mb-[50px]  border border-gray-200 rounded m-[10px]" data-value="2">


        <img

            src="images/57.avif"
            alt="asd"
        />

    </div>,
    //3
    <div className="item hover:shadow-2xl bg-white  mt-[100px] mb-[50px] border border-gray-200 rounded m-[10px]" data-value="3">

        <img

            src="images/58.avif"
            alt="asd"
        />

    </div>,

];

const CompanyCarousel = () => (
    <AliceCarousel

        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite
    />
);


export default CompanyCarousel;
