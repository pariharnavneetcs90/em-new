import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { mens_kurta } from "../../../Data/mens_kurta";

// ye pura move ho rhaha hai card or homeSectionCard se data/image wagera a rahi hai

// ye carosel lef right move karne ke liye 
const MyCaroselTest = () => {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    // ye jo niche likha hai responsive karne ke liye hai card/ carosel ko produt wale ko

    const items = [
        <div className="item" data-value="1">1</div>,
        <div className="item" data-value="2">2</div>,
        <div className="item" data-value="3">3</div>,
        <div className="item" data-value="4">4</div>,
        <div className="item" data-value="5">5</div>,
    ];

    //ye carosel lef right move karne ke liye 


    // niche wala (1,1,1,,1 batat hai kitne products hai jase 1,1,1,1, matlab 4 dispay kare ga)
    //const items = mens_kurta.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

    return (
        <>
            <h2 className='text-2xl font-extrabold text-[#522a7a] text-center'> Top Items</h2>
            <div className=" mt-[50px] ">

                <div className='relative p-5' >
                    {/* ye jo niche hai vo alice carosel hai  install kar ke use karte hai (https://maxmarinich.github.io/react-alice-carousel/#basic)*/}
                    <AliceCarousel
                        items={items}
                        // disableButtonsControls
                        // responsive={responsive}
                        // disableDotsControls
                        // onSlideChanged={syncActiveIndex}
                        // activeIndex={activeIndex}

                        mouseTracking
                        autoPlay
                        autoPlayInterval={5000}
                        infinite
                    />
                    {/* YE NICHE BUTTON product left right karne ke luiye hai */}

                </div>
            </div>
        </>
    )
}

export default MyCaroselTest;