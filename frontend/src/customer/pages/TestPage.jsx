import { Input } from '@mui/material'
import React from 'react'




const TestPage = () => {
    return (
        <>
            <div className='bg-blue-500'>


                <div>TestPage</div>
                <div>ss</div>
                <div>

                    <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">

                        <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                            <div class="py-5">
                                <details class="group">
                                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <span> AVAILABILITY</span>
                                        <span class="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                        <label className="pl-[20px]" style={{ display: 'flex', alignItems: 'center' }}>
                                            <input type="checkbox" name="checkbox" value="value" style={{ marginRight: '10px' }} />
                                            In stock
                                        </label>
                                        <label className="pl-[20px]" style={{ display: 'flex', alignItems: 'center' }}>
                                            <input type="checkbox" name="checkbox" value="value" style={{ marginRight: '8px' }} />
                                            Out of stock
                                        </label>
                                    </p>
                                </details>
                            </div>
                            <div class="py-5">
                                <details class="group">
                                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <span> SIZE</span>
                                        <span class="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                        <label className="pl-[20px]" style={{ display: 'flex', alignItems: 'center' }}>
                                            <input type="checkbox" name="checkbox" value="value" style={{ marginRight: '10px' }} />
                                            S
                                        </label>
                                        <label className="pl-[20px]" style={{ display: 'flex', alignItems: 'center' }}>
                                            <input type="checkbox" name="checkbox" value="value" style={{ marginRight: '8px' }} />
                                            M
                                        </label>
                                        <label className="pl-[20px]" style={{ display: 'flex', alignItems: 'center' }}>
                                            <input type="checkbox" name="checkbox" value="value" style={{ marginRight: '10px' }} />
                                            L
                                        </label>
                                        <label className="pl-[20px]" style={{ display: 'flex', alignItems: 'center' }}>
                                            <input type="checkbox" name="checkbox" value="value" style={{ marginRight: '8px' }} />
                                            XL
                                        </label>
                                        <label className="pl-[20px]" style={{ display: 'flex', alignItems: 'center' }}>
                                            <input type="checkbox" name="checkbox" value="value" style={{ marginRight: '8px' }} />
                                            2XL
                                        </label>
                                    </p>
                                </details>
                            </div>


                            <label className="pl-[20px]" style={{ display: 'flex', alignItems: 'center' }}>
                                <input type="checkbox" name="checkbox" value="value" style={{ marginRight: '10px' }} />
                                In stock
                            </label>
                            <label className="pl-[20px]" style={{ display: 'flex', alignItems: 'center' }}>
                                <input type="checkbox" name="checkbox" value="value" style={{ marginRight: '8px' }} />
                                Out of stock
                            </label>



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

        </>

    )
}

export default TestPage