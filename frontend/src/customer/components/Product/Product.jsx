import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { mens_kurta } from './../../../Data/mens_kurta';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findProducts } from './../../../State/Product/Action';

const Product = () => {

    const param = useParams();
    const dispatch = useDispatch();
    const { products } = useSelector(store => store)

    const decodedQueryString = decodeURIComponent(location.search);
    const searchParamms = new URLSearchParams(decodedQueryString);
    const colorValue = searchParamms.get("color");
    const sizeValue = searchParamms.get("size");
    const priceValue = searchParamms.get("price");
    const disccount = searchParamms.get("disccount");
    const sortValue = searchParamms.get("sort");
    const pageNumber = searchParamms.get("page") || 1;
    const stock = searchParamms.get("stock");
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
            pageSize: 20,
            stock: stock,
        }
        dispatch(findProducts(data))
    }, [param.lavelThree,
        colorValue,
        sizeValue,
        priceValue,
        disccount,
        sortValue,
        pageNumber,
        stock,])


    return (
        <div className='flex flex-wrap justify-center bg-white py-5'>
            {products.products && products.products?.content.map((item) => <ProductCard product={item} />)}
            {/* {mens_kurta.map((item) => <ProductCard product={item} />)} */}
        </div>
    )
}

export default Product