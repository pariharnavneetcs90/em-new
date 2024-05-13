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
    <div className="item hover:shadow-2xl  mt-[100px] mb-[30px] border border-gray-200 rounded m-[10px] " data-value="1">
        <img

            src="images/35.webp"
            alt="asd"
        />
        <p className='text-center mt-[50px] tracking-widest font-ijk'>
            KYRA MINI DRESS ~ CORAL
        </p>
        <div className='text-center text-xs mt-[20px] mb-[20px]'>
            <span className='font-ijk line-through'>Rs. 11,800.00 &nbsp;</span>
            <span className='font-ijk'>&nbsp;Rs. 8,800.00 &nbsp;</span>
            <span className='font-ijk text-[#cc2a2a]'>
                Save 25%
            </span>
        </div>

    </div>,
    // 2
    <div className="item hover:shadow-2xl  mt-[100px] mb-[30px] border border-gray-200 rounded m-[10px] " data-value="2">
        <img

            src="images/36.webp"
            alt="asd"
        />
        <p className='text-center mt-[50px] tracking-widest font-ijk'>
            KYRA MINI DRESS ~ CORAL
        </p>
        <div className='text-center text-xs mt-[20px] mb-[20px]'>
            <span className='font-ijk line-through'>Rs. 11,800.00 &nbsp;</span>
            <span className='font-ijk'>&nbsp;Rs. 8,800.00 &nbsp;</span>
            <span className='font-ijk text-[#cc2a2a]'>
                Save 25%
            </span>
        </div>

    </div>,
    // 3
    <div className="item hover:shadow-2xl  mt-[100px] mb-[30px] border border-gray-200 rounded m-[10px] " data-value="3">
        <img

            src="images/37.jpg"
            alt="asd"
        />
        <p className='text-center mt-[50px] tracking-widest font-ijk'>
            KYRA MINI DRESS ~ CORAL
        </p>
        <div className='text-center text-xs mt-[20px] mb-[20px]'>
            <span className='font-ijk line-through'>Rs. 11,800.00 &nbsp;</span>
            <span className='font-ijk'>&nbsp;Rs. 8,800.00 &nbsp;</span>
            <span className='font-ijk text-[#cc2a2a]'>
                Save 25%
            </span>
        </div>

    </div>,
    // //2
    // <div className="item hover:shadow-2xl  mt-[100px] mb-[50px]  border border-gray-200 rounded m-[10px]" data-value="2">
    //     <div className='text-center pt-[30px]'>
    //         <GradeIcon />
    //         <GradeIcon />
    //         <GradeIcon />
    //         <GradeIcon />
    //         <GradeIcon />
    //     </div>
    //     <p className='font-ijk text-center text-lg  text-black mt-[30px] underline '>
    //         I love my dress
    //     </p>
    //     <p className='font-ijk text-center text-base  text-gray-800'>
    //         It is beautifully made, it looks fabulous and I feel good knowing that my Daughters of India dress in an investment in slow fashion, empowering women and a community in there artisan crafts .
    //     </p>
    //     <p className='font-ijk text-center text-lg  text-black mt-[30px] '>
    //         Paula Davidson, Australia
    //     </p>

    // </div>,
    // //3
    // <div className="item hover:shadow-2xl  mt-[100px] mb-[50px] border border-gray-200 rounded m-[10px]" data-value="3">
    //     <div className='text-center pt-[30px]'>
    //         <GradeIcon />
    //         <GradeIcon />
    //         <GradeIcon />
    //         <GradeIcon />
    //         <GradeIcon />
    //     </div>
    //     <p className='font-ijk text-center text-lg  text-black mt-[30px] underline '>
    //         The most beautiful piece of clothing I own
    //     </p>
    //     <p className='font-ijk text-center text-base  text-gray-800'>
    //         MY GOODNESS. This dress is worth every single penny. I have never felt more beautiful and feminine in my life. It is so lightweight, flowy, and just down right stunning. It also...
    //     </p>
    //     <p className='font-ijk text-center text-lg  text-black mt-[30px] '>
    //         Savanna
    //     </p>

    // </div>,
    // <div className="item bg-red-500  mt-[100px]" data-value="2">2</div>,
    // <div className="item bg-blue-900  mt-[100px]" data-value="3">3</div>,
    // <div className="item bg-green-700  mt-[100px]" data-value="4">4</div>,
    // <div className="item bg-purple-600  mt-[100px]" data-value="5">5</div>,
];

const MiddleCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite
    />
);

export default MiddleCarousel;
