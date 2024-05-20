import React from 'react'
import { Link } from 'react-router-dom';

const RefundPage = () => {
    return (
        <>
            <div className=' mx-auto max-w-[520px] mt-[100px]'>
                <h1 className='text-black font-medium text-4xl text-center font-abc'>

                    Refund policy

                </h1>
                <div className='mt-[100px]'>
                    <p className='font-thin text-gray-700  text-sx  font-para italic '>
                        Our slow fashion garments are hand-crafted and serve to support Indian women in the workplace as well as the preservation of ancient methods of textile production. We follow a zero-waste design and production process and produce minimal quantities to eliminate any possibility of excess waste. Every purchase contributes to women empowerment projects in India through our charity partners and supports local Indian communities to continue their sustainable hand-craftsmanship for future generations.
                    </p>
                    <p className='font-thin mt-[40px] text-gray-700  text-sx  font-para italic '>
                        Due to their limited and unique nature, returned items (excluding final sale items) are eligible for an exchange of size or store credit in the form of a Daughters of India Gift Card.
                    </p>
                    <h1 className='text-black mt-[100px] font-medium text-sx  font-abc'>
                        To lodge a return, please visit our <Link to={"/"}> <span className='underline  text-blue-800'>Returns Portal</span> </Link>
                    </h1>
                    <p className='font-thin mt-[70px] text-gray-700  text-sx  font-para italic '>
                        ~ Returns are accepted within 30 days from shipment. Unfortunately we are unable to honour a return outside of the 30 day return period.
                    </p>
                    <p className='font-thin mt-[50px] text-gray-700  text-sx  font-para italic '>
                        ~ Returns are refunded via store credit in the form of a Daughters of India Gift Card.
                    </p>
                    <p className='font-thin mt-[50px] text-gray-700  text-sx  font-para italic '>
                        ~ Exchanges are available on the same item only, in smaller or larger size.
                    </p>
                    <p className='font-thin mt-[50px] text-gray-700  text-sx  font-para italic '>
                        ~ Final sale items: no returns, store credits, or exchanges on final sale items
                    </p>
                    <p className='font-thin mt-[50px] text-gray-700  text-sx  font-para italic '>
                        ~ Items must be returned in original condition - unworn, unwashed with tags attached, folded neatly in the Daughters of India tote bag provided.
                    </p>
                    <p className='font-thin mt-[50px] text-gray-700  text-sx  font-para italic '>
                        ~ Domestic orders within Australia will be provided with a prepaid postage return label and a $10 postage fee will be deducted from your Gift Card amount.
                    </p>
                    <p className='font-thin mt-[50px] text-gray-700  text-sx  font-para italic '>
                        ~ Once you have placed your order we are unable to make any changes. This includes cancelling or swapping of any sizes or items within your order. Rest assured we do have a flexible returns policy should you receive your order and it’s not quite right for you.
                    </p>
                    <h1 className='text-black mt-[100px] font-medium text-sx  font-abc'>
                        LOST OR MISSING RETURNS
                    </h1>
                    <p className='font-thin mt-[50px] text-gray-700  text-sx  font-para italic mb-[100px]'>
                        Lost or missing returns are not the responsibility of Daughters of India. We strongly advise to use a trackable return shipping service to ensure your return is delivered to our warehouse safely.
                    </p>


                </div>


            </div>
        </>
    )
}

export default RefundPage