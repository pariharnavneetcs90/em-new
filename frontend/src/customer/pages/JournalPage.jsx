import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const JournalPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Link to="/journaldetail">
                <h1 className='font-ijk text-center text-4xl  text-black  mt-[100px] '>
                    On the Journal
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
            {/* 2st row journal */}
            <div className='grid gap-5 mt-[30px] ml-[50px] mr-[50px] sm:grid-cols-3'>
                {/* 1 */}
                <div className=''>
                    <Link to="/journaldetail">
                        <img
                            src="images/41.webp"
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
                            src="images/42.webp"
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
                            src="images/43.webp"
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
            {/* 3st row journal */}
            <div className='grid gap-5 mt-[30px] ml-[50px] mr-[50px] sm:grid-cols-3'>
                {/* 1 */}
                <div className=''>
                    <Link to="/journaldetail">
                        <img
                            src="images/44.webp"
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
                            src="images/45.webp"
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
                            src="images/46.webp"
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
            {/* 4st row journal */}
            <div className='grid gap-5 mt-[30px] ml-[50px] mr-[50px] sm:grid-cols-3'>
                {/* 1 */}
                <div className=''>
                    <Link to="/journaldetail">
                        <img
                            src="images/47.webp"
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
                            src="images/48.webp"
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
                            src="images/49.webp"
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

export default JournalPage