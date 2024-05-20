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
        <div className='flex flex-wrap justify-center bg-white py-5'>
            {products && products.map((product) => (
                <ProductCard product={product} key={product._id} />
            ))}
        </div>
    );
};

export default Product;
