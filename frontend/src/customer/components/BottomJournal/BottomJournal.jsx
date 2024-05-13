import React from 'react'

const BottomJournal = () => {
    return (
        <>
            <h1 className='font-ijk text-center text-3xl  text-black  mt-[100px] '>
                From the Journal
            </h1>
            <h1 className='text-center mt-[10px]'>
                <button class="bg-white tracking-widest font-ijk hover:bg-gray-100 text-gray-800  py-2 px-4 border border-gray-400 ">
                    VIEW ALL
                </button>
            </h1>
            {/* 3 journal */}
            <div className='grid gap-5 mt-[100px] ml-[50px] mr-[50px] sm:grid-cols-3'>
                {/* 1 */}
                <div className=''>
                    <img
                        src="images/32.webp"
                        alt="asd"
                    />
                    <h1 className='font-ijk text-center text-xs  text-gray-800  mt-[10px] '>
                        Apr 01, 2024
                    </h1>
                    <h1 className='text-center mt-[10px]'>
                        <p className='font-ijk text-center text-lg  text-gray-800   '>
                            Chai & Chats with @solmama__
                        </p>
                    </h1>

                </div>
                {/* 2 */}
                <div className=''>
                    <img
                        src="images/33.webp"
                        alt="asd"
                    />
                    <h1 className='font-ijk text-center text-xs  text-gray-800  mt-[10px] '>
                        Apr 16, 2024
                    </h1>
                    <h1 className='text-center mt-[10px]'>
                        <p className='font-ijk text-center text-lg  text-gray-800   '>
                            Sewing the Seeds New Centre
                        </p>
                    </h1>
                </div>
                {/* 3 */}
                <div className=''>
                    <img
                        src="images/34.webp"
                        alt="asd"
                    />
                    <h1 className='font-ijk text-center text-xs  text-gray-800  mt-[10px] '>
                        May 09, 2024
                    </h1>
                    <h1 className='text-center mt-[10px]'>
                        <p className='font-ijk text-center text-lg  text-gray-800   '>
                            Moving with Nauvoo
                        </p>
                    </h1>
                </div>

            </div>
        </>
    )
}

export default BottomJournal