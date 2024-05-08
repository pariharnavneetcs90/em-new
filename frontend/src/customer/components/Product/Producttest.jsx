import React from 'react'
import { mens_kurta } from '../../../Data/mens_kurta'
import ProductCardtest from './ProductCardtest';


const Producttest = () => {

    //const decodedQueryString = decodeURIComponent(location.search);
    //const searchParams = new URLSearchParams(decodedQueryString);
    // const colorValue = searchParams.get("color");
    // const sizeValue = searchParams.get("size");
    // const priceValue = searchParams.get("price");
    // const disccount = searchParams.get("disccount");
    // const sortValue = searchParams.get("sort");
    // const pageNumber = searchParams.get("page") || 1;
    // const stock = searchParams.get("stock");



    return (
        <div className='lg:col-span-4 w-full'>
            {/* <ProductCardtest /> */}
            <div className='flex flex-wrap justify-center bg-white py-5'>
                {/* niche product */}
                {mens_kurta.map((item) => <ProductCardtest product={item} />)}
            </div>

        </div>
    )
}

export default Producttest