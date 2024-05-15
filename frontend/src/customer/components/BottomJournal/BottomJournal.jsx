import React from 'react'
import { Link } from 'react-router-dom';

const BottomJournal = () => {
    return (
        <>
            <h1 className='font-ijk text-center text-3xl  text-black  mt-[100px] '>
                From the Journal
            </h1>
            <Link to='/journal'>
                <h1 className='text-center mt-[10px]'>
                    <button class="bg-white tracking-widest font-ijk hover:bg-gray-100 text-gray-800  py-2 px-4 border border-gray-400 ">
                        VIEW ALL
                    </button>
                </h1>
            </Link>

            {/* 1st row journal */}
            <div className='grid gap-5 mt-[100px] ml-[50px] mr-[50px] sm:grid-cols-3'>
                {/* 1 */}
                <div className=''>
                    <Link to="/journaldetail">
                        <img
                            src="images/32.webp"
                            alt="asd"
                        />
                    </Link>
                    <h1 className='font-ijk text-center text-xs  text-gray-800  mt-[30px] '>
                        Apr 01, 2024
                    </h1>
                    <Link to="/journaldetail">
                        <h1 className='text-center mt-[10px]'>
                            <p className='font-ijk text-center text-lg  text-gray-800   '>
                                Chai & Chats with @solmama__
                            </p>
                        </h1>
                    </Link>


                </div>
                {/* 2 */}
                <div className=''>
                    <Link to="/journaldetail">
                        <img
                            src="images/33.webp"
                            alt="asd"
                        />
                    </Link>

                    <h1 className='font-ijk text-center text-xs  text-gray-800  mt-[30px] '>
                        Apr 16, 2024
                    </h1>
                    <Link to="/journaldetail">
                        <h1 className='text-center mt-[10px]'>
                            <p className='font-ijk text-center text-lg  text-gray-800   '>
                                Sewing the Seeds New Centre
                            </p>
                        </h1>
                    </Link>

                </div>
                {/* 3 */}
                <div className=''>
                    <Link to="/journaldetail">
                        <img
                            src="images/34.webp"
                            alt="asd"
                        />
                    </Link>

                    <h1 className='font-ijk text-center text-xs  text-gray-800  mt-[30px] '>
                        May 09, 2024
                    </h1>
                    <Link to="/journaldetail">
                        <h1 className='text-center mt-[10px]'>
                            <p className='font-ijk text-center text-lg  text-gray-800   '>
                                Moving with Nauvoo
                            </p>
                        </h1>
                    </Link>

                </div>

            </div>
        </>
    )
}

export default BottomJournal