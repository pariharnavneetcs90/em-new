import React, { useEffect } from 'react'
import AdressCard from '../AdressCard/AdressCard'
import CartItem from '../CartEcom/CartItem'
import { useDispatch } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'

const OrderSummery = () => {
    // dispatch = useDispatch();
    // location = useLocation();
    // const searchParam = new URLSearchParams(location.search);
    // const orderId = searchParams.get("order_id")
    // useEffect(() => {
    //     dispatch(getOrderById(orderId))
    // }, [orderId])
    return (
        <div>
            <div className='p-5 shadow-lg rounded-s-md border'>
                <AdressCard />


            </div>
            <div className='mt-[50px]'>
                <div className='lg:grid grid-cols-3  relative'>
                    <div className='col-span-2'>
                        {[1, 1, 1, 1].map((item) => <CartItem />)}
                    </div>


                    <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>

                        <div className='border'>

                            <p className='uppercase font-bold opacity-60 pb-4'>Price details0</p>
                            <hr />

                            <div className='space-y-3 font-semibold'>

                                <div className='flex justify-between pt-3 text-black '>
                                    <span>Price</span>
                                    <span>₹7697</span>
                                </div>

                                <div className='flex justify-between pt-3 '>
                                    <span>disscount</span>
                                    <span className='text-green-600'>₹3419</span>
                                </div>

                                <div className='flex justify-between pt-3  '>
                                    <span>Delivery Charges</span>
                                    <span className='text-green-600'>Free</span>
                                </div>

                                <div className='flex justify-between pt-3  font-bold '>
                                    <span>Total Amount</span>
                                    <span className='text-green-600'>₹1278</span>
                                </div>

                            </div>

                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                CHECKOUT
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OrderSummery