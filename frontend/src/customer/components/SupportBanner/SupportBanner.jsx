import React from 'react'

const SupportBanner = () => {
    return (
        <div className='mt-[100px]'>
            <div className=' sm:hidden'>

                <img

                    src="images/27.webp"
                    alt="asd"
                />
            </div>


            <div className='hidden sm:block '>

                <img

                    src="images/26.webp"
                    alt="asd"
                />
            </div>

            <p className='font-ijk text-center text-xl  text-gray-800  mt-[100px] '>
                We support the art of hand block printing and sustainably handmade garments that utilise tradition and
            </p>
            <p className='font-ijk text-center text-xl  text-gray-800  mt-[5px] '>
                ritual through ancient practice. Our aim is to bridge the gap between artisan and consumer, our connection
            </p>
            <p className='font-ijk text-center text-xl  text-gray-800  mt-[5px] '>
                with one another, and the Earth.
            </p>


        </div>
    )
}

export default SupportBanner