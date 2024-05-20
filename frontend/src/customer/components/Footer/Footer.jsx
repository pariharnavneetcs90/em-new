import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { useNavigate } from "react-router-dom";


function Footer() {

  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <footer className="relative bg-[#44496c] pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-white">
                EMPRESSA
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                BE BOLD, BE YOU, BE UNSTOPPABLE
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
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
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="text-white block uppercase  text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li as={Link}>
                      <Link
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/about"
                      >
                        About Us
                      </Link>
                    </li>
                    <li as={Link}>
                      <Link
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/journal">
                        <p className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          Journal
                        </p>
                      </Link>
                    </li>
                    {/* <li>
                      <a
                        class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                      >
                        Contact Us
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        Blog
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Github
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Free Products
                      </a>
                    </li> */}
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span class="block uppercase text-white text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul class="list-unstyled">
                    {/* <li>
                      <a
                        class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        MIT License
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li> */}
                    <li>
                      <Link to="/refund">
                        <p className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          Refund
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy">
                        <p className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          Privacy Policy
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/term">
                        <p className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                          Term and Services
                        </p>
                      </Link>
                    </li>



                    {/* <li>
                      <a
                        class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Privacy Policy
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                      >
                        Contact Us
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span>
                {/* <a
                  href="https://www.creative-tim.com/product/notus-js"
                  class="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                />{" "} */}{" "}
                Empressa
                {/* <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  class="text-blueGray-500 hover:text-blueGray-800"
                >
                  Creative Tim
                </a>
                . */}
              </div>
            </div>
          </div>
        </div>
      </footer >
    </>
  );
}

export default Footer;
