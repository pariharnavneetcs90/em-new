import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { mens_kurta } from '../../../Data/mens_kurta';
import 'react-alice-carousel/lib/alice-carousel.css';
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// ye pura move ho rhaha hai card or homeSectionCard se data/image wagera a rahi hai

// ye carosel lef right move karne ke liye 
const HomeSectionCarosel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev = () => setActiveIndex(activeIndex - 1);

    const slideNext = () => {
        const newIndex = activeIndex + 1;
        setActiveIndex(newIndex);
    }


    const syncActiveIndex = ({ item }) => {
        console.log("item", item);
        setActiveIndex(item);
    }

    // ye jo niche likha hai responsive karne ke liye hai card/ carosel ko produt wale ko
    const responsive = {
        // ye jo niche hai 720 vo pixel hai matlab 720px hai to 3 item dhikana hai or 1024px hai to 4 item dhikana hai
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };


    // //ye carosel lef right move karne ke liye 
    // const slidePrev = () => setActiveIndex(activeIndex - 1);
    // const slideNext = () => setActiveIndex(activeIndex + 1)

    // const syncActiveIndex = ({ item }) => setActiveIndex(item)

    // niche wala (1,1,1,,1 batat hai kitne products hai jase 1,1,1,1, matlab 4 dispay kare ga)
    const items = mens_kurta.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

    return (
        <>
            <h2 className='text-2xl font-extrabold text-[#522a7a] text-center'> Top product</h2>
            <div className=" mt-[50px] ">

                <div className='relative p-5' >
                    {/* ye jo niche hai vo alice carosel hai  install kar ke use karte hai (https://maxmarinich.github.io/react-alice-carousel/#basic)*/}
                    <AliceCarousel
                        items={items}
                        mouseTracking
                        // disableButtonsControls
                        responsive={responsive}
                        disableDotsControls
                        onSlideChanged={syncActiveIndex}
                        activeIndex={activeIndex}

                    // mouseTracking
                    // autoPlay
                    // autoPlayInterval={5000}
                    // infinite
                    />
                    {/* YE NICHE BUTTON product left right karne ke luiye hai */}
                    {/* {activeIndex !== items.length - 5 && <Button onClick={slideNext} variant='contained' className='z-50' sx={{
                        position: 'absolute', top: "8rem",
                        right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: "white"
                    }} aria-label='next'  >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>}
                    
                    {activeIndex !== 0 && <Button onClick={slidePrev} variant='contained' className='z-50' sx={{
                        position: 'absolute', top: "8rem",
                        left: "0rem", transform: "translateX(-50%) rotate(-90deg)", bgcolor: "white"
                    }} aria-label='next'  >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>} */}
                </div>
            </div>
        </>
    )
}

export default HomeSectionCarosel;



