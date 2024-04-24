import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findProducts } from './../../../State/Product/Action';

const Product = () => {

    const param = useParams();
    const dispatch = useDispatch();
    const { products } = useSelector(state=> state);
    const location = useLocation();

    const decodedQueryString = decodeURIComponent(location.search);
    const searchParams = new URLSearchParams(decodedQueryString);
    const colorValue = searchParams.get("color");
    const sizeValue = searchParams.get("size");
    const priceValue = searchParams.get("price");
    const disccount = searchParams.get("disccount");
    const sortValue = searchParams.get("sort");
    const pageNumber = searchParams.get("page") || 1;
    const stock = searchParams.get("stock");

    useEffect(() => {
        const [minPrice, maxPrice] = priceValue === null ? [0, 10000] : priceValue.split("-").map(Number);

        const data = {
            category: param.lavelThree,
            colors: colorValue || [],
            sizes: sizeValue || [],
            minPrice: minPrice,
            maxPrice: maxPrice,
            minDiscount: disccount || 0,
            sort: sortValue || "price_low",
            pageNumber: pageNumber,
            pageSize: 30,
            stock: stock,
        };
        dispatch(findProducts(data));
    }, [param.lavelThree,
        colorValue,
        sizeValue,
        priceValue,
        disccount,
        sortValue,
        pageNumber,
        stock,]);

    return (
        <div className='flex flex-wrap justify-center bg-white py-5'>
            {products.products && products.products?.content.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
    );
};

export default Product;
