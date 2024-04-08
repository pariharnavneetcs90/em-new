import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCartItem } from '../../../State/Cart/Action';
import { Button } from '@mui/material';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handelRemoveCartItem = () => {
        console.log("hello", item);
        dispatch(removeCartItem(item._id))
    }
    return (
        <div className='p-5 shadow-lg border rounded-md'>

            <div className='flex items-center'>

                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top'
                        src={item?.product?.imageUrl} alt='' />
                </div>

                <div className='ml-5 space-y-1'>

                    <p className='font-semibold'>{item?.product?.title}</p>
                    <p className='opacity-70'>Size:{item?.size},white</p>
                    <p className='opacity-70 mt-2'>Seller:{item?.product?.brand}</p>
                    <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                        <p className='font-semibold'>₹{item?.price}</p>
                        <p className='line-through opacity-50'>₹{item?.discountedPrice}</p>
                        <p className='text-green-600 font-semibold'>{item?.discountPersent}% OFF</p>
                    </div>
                </div>



            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4 ml-[160px]'>
                <Button onClick={handelRemoveCartItem}  >
                    remove
                </Button>
            </div>

        </div>
    )
}

export default CartItem