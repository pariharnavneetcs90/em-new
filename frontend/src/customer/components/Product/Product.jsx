import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findProducts } from './../../../State/Product/Action';
import { mens_kurta } from './../../../Data/mens_kurta';

const Product = () => {
    const { topLavel } = useParams();
    const dispatch = useDispatch();
    const { products } = useSelector(store => store)
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
        const [minPrice, maxPrice] = priceValue ? priceValue.split("-").map(Number) : [0, 10000];

        const data = {
            category: topLavel,
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
    }, [topLavel, colorValue, sizeValue, priceValue, discount, sortValue, pageNumber, stock, dispatch]);

    return (

        <div className='flex flex-wrap justify-center bg-white py-5'>
            {products && products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Product;
