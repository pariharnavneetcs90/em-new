import React from 'react'
import { useNavigate } from 'react-router-dom';

//ye jo niche product likha hai ye matlab product le raha hai homeSectionCarousel se 
const HomeSectionCard = ({ product }) => {

    const navigate = useNavigate();
    return (
        <div onClick={() => navigate('men/clothing/mens_kurta')} >

            {/* rounded-lg matlab (	border-radius: 0.5rem; 8px )*/}
            <div className='cursor-pointer flex  flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 '>
                <div className="h-[13rem] w-[10rem]">
                    {/* object-cover(taki image na srink ho) ,object-top(agar image katna ho to upar ka kat jaye niche ka nahi kate)*/}
                    <img className='object-cover object-top w-full h-full' src={product.image} alt='asd' />
                    <h1 className=" text-3xl font-bold underline">ss</h1>
                </div>
            </div>

            <div className=' p-4'>
                {/* font-medium matlab font weight */}
                <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
                <p className='mt-2 text-sm  text-gray-500'>{product.title}</p>
            </div>
        </div>
    )
}

export default HomeSectionCard;
