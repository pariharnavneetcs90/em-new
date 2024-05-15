import React from 'react'

const CompanyMiddleImage = () => {
    return (
        <>
            <div className='grid gap-5 mt-[100px] ml-[50px] mr-[50px] sm:grid-cols-2  mx-auto max-w-[1000px]'>
                {/* 1 */}
                <div className=''>
                    <img
                        src="images/52.webp"
                        alt="asd"
                    />


                </div>
                {/* 2 */}
                <div className=''>
                    <img
                        src="images/53.webp"
                        alt="asd"
                    />

                </div>



            </div >

            <div className='flex justify-center items-center mt-[100px]'>
                <h1 className='font-ijk text-xl text-center text-gray-800'>
                    “When you open your heart to give,<br />
                    the grace of the divine invariably seeps in.”
                </h1>


            </div>
            <h1 className='font-ijk font-semibold mt-[20px] text-xl text-center text-black '>
                ~ Sadhguru
            </h1>
            <div className='mt-[60px]'>
                <img
                    src="images/54.avif"
                    alt="asd"
                />
            </div>

        </>
    )
}

export default CompanyMiddleImage