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
    <div className="item hover:shadow-2xl  mt-[100px] mb-[50px] border border-gray-200 rounded m-[10px] " data-value="1">
        <div className='text-center pt-[30px]'>
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
        </div>
        <p className='font-ijk text-center text-lg  text-black mt-[30px] underline  '>
            Gorgeous dress!
        </p>
        <p className='font-ijk text-center text-base  text-gray-800'>
            The Kyra Midi is just beautiful and looks great layered & with boots as we change seasons. I love the volume of the fabric, especially the gathering at the back, and the length of the dress.
        </p>
        <p className='font-ijk text-center text-lg  text-black mt-[30px] '>
            Darlsy P
        </p>

    </div>,
    //2
    <div className="item hover:shadow-2xl  mt-[100px] mb-[50px]  border border-gray-200 rounded m-[10px]" data-value="2">
        <div className='text-center pt-[30px]'>
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
        </div>
        <p className='font-ijk text-center text-lg  text-black mt-[30px] underline '>
            I love my dress
        </p>
        <p className='font-ijk text-center text-base  text-gray-800'>
            It is beautifully made, it looks fabulous and I feel good knowing that my Daughters of India dress in an investment in slow fashion, empowering women and a community in there artisan crafts .
        </p>
        <p className='font-ijk text-center text-lg  text-black mt-[30px] '>
            Paula Davidson, Australia
        </p>

    </div>,
    //3
    <div className="item hover:shadow-2xl  mt-[100px] mb-[50px] border border-gray-200 rounded m-[10px]" data-value="3">
        <div className='text-center pt-[30px]'>
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
        </div>
        <p className='font-ijk text-center text-lg  text-black mt-[30px] underline '>
            The most beautiful piece of clothing I own
        </p>
        <p className='font-ijk text-center text-base  text-gray-800'>
            MY GOODNESS. This dress is worth every single penny. I have never felt more beautiful and feminine in my life. It is so lightweight, flowy, and just down right stunning. It also...
        </p>
        <p className='font-ijk text-center text-lg  text-black mt-[30px] '>
            Savanna
        </p>

    </div>,
    // <div className="item bg-red-500  mt-[100px]" data-value="2">2</div>,
    // <div className="item bg-blue-900  mt-[100px]" data-value="3">3</div>,
    // <div className="item bg-green-700  mt-[100px]" data-value="4">4</div>,
    // <div className="item bg-purple-600  mt-[100px]" data-value="5">5</div>,
];

const BottomReview = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite
    />
);
// import React from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import GradeIcon from '@mui/icons-material/Grade';
// const items = [

//     <div className="item bg-[#f9f9f9]" data-value="1">

//         <div className="text-center ">
//             <GradeIcon />
//             <GradeIcon />
//             <GradeIcon />
//             <GradeIcon />
//             <GradeIcon />

//         </div>
//         <p>The most beautiful piece of clothing I own</p>
//     </div>,


// ];

// const BottomReview = () => (

//     <AliceCarousel
//         mouseTracking
//         items={items}
//         autoPlay
//         autoPlayInterval={5000}
//         infinite
//     />
// );

export default BottomReview;
