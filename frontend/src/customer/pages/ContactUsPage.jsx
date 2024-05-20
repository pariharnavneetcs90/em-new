import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactUsPage = () => {
    return (
        <>
            <div className='mt-[30px] mb-[100px] bg-[#faf8f1]  mx-auto max-w-[1000px] rounded-[40px]'>
                <div className='pt-[300px] pb-[300px]'>
                    <h1 className='tracking-widest font-light text-2xl text-center'>
                        IN CONNECTION WITH US
                    </h1>
                    <h1 className='text-black text-5xl text-center'>
                        Contact Us
                    </h1>

                    <p className='font-ijk text-center text-lg  text-black  mt-[30px] font-bold'>
                        email: <spna className="text-lg  text-gray-800">navneetparihar@gmail.com</spna>
                    </p>

                    {/* icons */}
                    <div className="flex justify-center items-center mt-[50px]">
                        <button onClick={() => window.location.href = "https://www.instagram.com/empressa_fashion/"}
                            className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button"

                        >
                            {/* <i class="fab fa-twitter"></i> */}

                            <InstagramIcon />


                        </button>
                        <button
                            className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button"
                        >
                            {/* <i class="fab fa-facebook-square"></i> */}
                            <EmailIcon />


                        </button>
                        <button
                            className="bg-white text-green-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                            type="button"
                        >
                            {/* <i class="fab fa-dribbble"></i> */}
                            <WhatsAppIcon />
                        </button>
                        {/* <button
                  class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-github"></i>
                </button> */}
                    </div>




                    <div className='mt-[50px] '>
                        <img
                            src="images/59.avif"
                            alt="asd"
                        />
                    </div>


                </div>
            </div>

        </>
    )
}

export default ContactUsPage