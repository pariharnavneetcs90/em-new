// import React, { useEffect } from 'react';
// import ProductCard from './ProductCard';
// import axios from 'axios';
// import { useParams, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { findProducts } from './../../../State/Product/Action';
// import { mens_kurta } from './../../../Data/mens_kurta';

// const Product = () => {
//     const param = useParams();
//     const dispatch = useDispatch();
//     const { products } = useSelector(store => store)
//     console.log("products", products)
//     const location = useLocation();

//     const decodedQueryString = decodeURIComponent(location.search);
//     const searchParams = new URLSearchParams(decodedQueryString);

//     const colorValue = searchParams.get("color");
//     const sizeValue = searchParams.get("size");
//     const priceValue = searchParams.get("price");
//     const discount = searchParams.get("discount") || 0;
//     const sortValue = searchParams.get("sort") || "price_low";
//     const pageNumber = searchParams.get("page") || 1;
//     const stock = searchParams.get("stock");

//     useEffect(() => {
//         const [minPrice, maxPrice] = priceValue ? priceValue.split("-").map(Number) : [0, 100000];

//         const data = {
//             category: param.level,
//             colors: colorValue ? colorValue.split(",") : [],
//             sizes: sizeValue ? sizeValue.split(",") : [],
//             minPrice,
//             maxPrice,
//             minDiscount: discount,
//             sort: sortValue,
//             pageNumber,
//             pageSize: 30,
//             stock,
//         };
//         console.log("data in products", data)
//         dispatch(findProducts(data));
//     }, [ param.level, colorValue, sizeValue, priceValue, discount, sortValue, pageNumber, stock, dispatch]);

//     return (
//         <>
//         <div className='flex flex-wrap justify-center bg-white py-5'>

//              {/* {products.products && products.products?.content.map((item) => <ProductCard product={item} />)} */}
//         </div>
//         </>
//     );
// };

// export default Product;


// import React, { useEffect } from 'react';
// import ProductCard from './ProductCard';
// import { useParams, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { findProducts } from './../../../State/Product/Action';

// const Product = () => {
//     const param = useParams();
//     const dispatch = useDispatch();
//     const { products } = useSelector(state => state); // Accessing products from Redux store
//     console.log("products", products); // Log products data

//     const location = useLocation();
//     const decodedQueryString = decodeURIComponent(location.search);
//     const searchParams = new URLSearchParams(decodedQueryString);

//     const colorValue = searchParams.get("color");
//     const sizeValue = searchParams.get("size");
//     const priceValue = searchParams.get("price");
//     const discount = searchParams.get("discount") || 0;
//     const sortValue = searchParams.get("sort") || "price_low";
//     const pageNumber = searchParams.get("page") || 1;
//     const stock = searchParams.get("stock");

//     useEffect(() => {
//         const [minPrice, maxPrice] = priceValue ? priceValue.split("-").map(Number) : [0, 100000];

//         const data = {
//             category: param.level,
//             colors: colorValue ? colorValue.split(",") : [],
//             sizes: sizeValue ? sizeValue.split(",") : [],
//             minPrice,
//             maxPrice,
//             minDiscount: discount,
//             sort: sortValue,
//             pageNumber,
//             pageSize: 30,
//             stock,
//         };
//         console.log("data in products", data);
//         dispatch(findProducts(data));
//     }, [param.level, colorValue, sizeValue, priceValue, discount, sortValue, pageNumber, stock, dispatch]);

//     return (
//         <div className='flex flex-wrap justify-center bg-white py-5'>
//             {products && products?.content.map((item) => <ProductCard product={item} key={item._id} />)}
//         </div>
//     );
// };

// export default Product;

import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findProducts } from './../../../State/Product/Action';

const Product = () => {
    const param = useParams();
    const dispatch = useDispatch();
    const { products, currentPage, totalPages } = useSelector(state => state.products);

    const location = useLocation();
    const decodedQueryString = decodeURIComponent(location.search);
    const searchParams = new URLSearchParams(decodedQueryString);

    const colorValue = searchParams.get("color");
    const sizeValue = searchParams.get("size");
    const priceValue = searchParams.get("price");
    const discount = searchParams.get("discount") || 0;
    const sortValue = searchParams.get("sort") || "price_low";
    const pageNumber = searchParams.get("page") || 1;
    const stock = searchParams.get("stock");

    useEffect(() => {
        const [minPrice, maxPrice] = priceValue ? priceValue.split("-").map(Number) : [0, 100000];

        const data = {
            category: param.level,
            colors: colorValue ? colorValue.split(",") : [],
            sizes: sizeValue ? sizeValue.split(",") : [],
            minPrice,
            maxPrice,
            minDiscount: discount,
            sort: sortValue,
            pageNumber,
            pageSize: 30,
            stock,
        };
        dispatch(findProducts(data));
    }, [param.level, colorValue, sizeValue, priceValue, discount, sortValue, pageNumber, stock, dispatch]);

    return (
        <>
            <div className='mt-[100px]'>
                <h1 className='text-black font-medium text-4xl text-center font-abc'>
                    Online Boutique
                </h1>
            </div>
            <div className='container mx-auto'>
                <div className="grid gap-4 sm:grid-cols-12">
                    <div className="min-h-[100px] bg-white sm:col-span-3">
                        <div>


                            <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">

                                <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                                    <div className="py-5">
                                        <details className="group">
                                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                                <span className='tracking-widest font-light text-base text-center'> AVAILABILITY</span>
                                                <span className="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p classclassName="text-neutral-600 mt-3 group-open:animate-fadeIn ">
                                                <label className=" pt-[20px]" style={{ display: 'flex', alignItems: 'center' }}>
                                                    <input type="checkbox" name="checkbox" value="value" style={{ marginRight: '10px' }} />
                                                    In stock
                                                </label>
                                                <label className="" style={{ display: 'flex', alignItems: 'center' }}>
                                                    <input type="checkbox" name="checkbox" value="value" style={{ marginRight: '8px' }} />
                                                    Out of stock
                                                </label>
                                            </p>
                                        </details>
                                    </div>
                                    <div className="py-5">
                                        <details className="group">
                                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                                <span className='tracking-widest font-light text-base text-center'> SIZE</span>
                                                <span className="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </summary>
                                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                                <label className="pt-[20px]" style={{ display: 'flex', alignItems: 'center' }}>
                                                    <input type="checkbox" name="checkbox" value="value" style={{ marginRight: '10px' }} />
                                                    S
                                                </label>
                                                <label className="" style={{ display: 'flex', alignItems: 'center' }}>
                                                    <input type="checkbox" name="checkbox" value="value" style={{ marginRight: '8px' }} />
                                                    M
                                                </label>
                                                <label className="" style={{ display: 'flex', alignItems: 'center' }}>
                                                    <input type="checkbox" name="checkbox" value="value" style={{ marginRight: '10px' }} />
                                                    L
                                                </label>
                                                <label className="" style={{ display: 'flex', alignItems: 'center' }}>
                                                    <input type="checkbox" name="checkbox" value="value" style={{ marginRight: '8px' }} />
                                                    XL
                                                </label>
                                                <label className="" style={{ display: 'flex', alignItems: 'center' }}>
                                                    <input type="checkbox" name="checkbox" value="value" style={{ marginRight: '8px' }} />
                                                    2XL
                                                </label>
                                            </p>
                                        </details>
                                    </div>



                                    {/* <div class="py-5">
        <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Can I get a refund for my subscription?</span>
                <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We offers a 30-day money-back guarantee for most of its subscription plans. If you are not
                satisfied with your subscription within the first 30 days, you can request a full refund. Refunds
                for subscriptions that have been active for longer than 30 days may be considered on a case-by-case
                basis.
            </p>
        </details>
    </div>
    <div class="py-5">
        <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> How do I cancel my subscription?</span>
                <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                To cancel your We subscription, you can log in to your account and navigate to the
                subscription management page. From there, you should be able to cancel your subscription and stop
                future billing.
            </p>
        </details>
    </div>
    <div class="py-5">
        <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Can I try this platform for free?</span>
                <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We offers a free trial of its  platform for a limited time. During the trial period,
                you will have access to a limited set of features and functionality, but you will not be charged.
            </p>
        </details>
    </div>
    <div class="py-5">
        <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> How do I access   documentation?</span>
                <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Documentation is available on the company's website and can be accessed by
                logging in to your account. The documentation provides detailed information on how to use the ,
                as well as code examples and other resources.
            </p>
        </details>
    </div>
    <div class="py-5">
        <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> How do I contact support?</span>
                <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                If you need help with the platform or have any other questions, you can contact the
                company's support team by submitting a support request through the website or by emailing
                support@We.com.
            </p>
        </details>
    </div>
    <div class="py-5">
        <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Do you offer any discounts or promotions?</span>
                <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                We may offer discounts or promotions from time to time. To stay up-to-date on the latest
                deals and special offers, you can sign up for the company's newsletter or follow it on social media.
            </p>
        </details>
    </div>
    <div class="py-5">
        <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> How do we compare to other similar services?</span>
                <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                This platform is a highly reliable and feature-rich service that offers a wide range
                of tools and functionality. It is competitively priced and offers a variety of billing options to
                suit different needs and budgets.
            </p>
        </details>
    </div> */}
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="min-h-[100px] bg-teal-500 sm:col-span-9">
                        <div className='flex flex-wrap justify-center bg-white py-5'>
                            {products && products.map((product) => (
                                <ProductCard product={product} key={product._id} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* 
            <div className='mt-[100px]'>
                <h1 className='text-black font-medium text-4xl text-center font-abc'>
                    Online Boutique
                </h1>
            </div> */}


            {/* 
            <div className='flex flex-wrap justify-center bg-white py-5'>
                {products && products.map((product) => (
                    <ProductCard product={product} key={product._id} />
                ))}
            </div> */}


        </>

    );
};

export default Product;
