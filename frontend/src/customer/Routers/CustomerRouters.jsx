import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage'
import CartEcom from '../components/CartEcom/Cart'
import Head from '../components/Navbar/Head'
import Footer from '../components/Footer/Footer'
import Product from '../components/Product/Product'
import ProductDetails from '../components/ProductDetails/ProductDetails'
// import PaymentSuccess from "../customer/Components/paymentSuccess/PaymentSuccess";
import Checkout from '../components/Checkout/Checkout'

import JournalPage from '../pages/JournalPage'
import JournalDetailPage from '../pages/JournalDetailPage'
import CompanyPage from './../pages/HomePage/CompanyPage';
import RefundPage from './../pages/RefundPage';
import PrivacyPage from '../pages/PrivacyPage'
import TermPage from '../pages/TermPage'
import ContactUsPage from '../pages/ContactUsPage'
import TestPage from './../pages/TestPage';

const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Head />
            </div>
            <Routes>
                <Route path='/login' element={<HomePage />}></Route>
                <Route path='/register' element={<HomePage />}></Route>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/cart' element={<CartEcom />}></Route>
                <Route path='/products' element={<Product />}></Route>
                {/* <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product />}></Route> */}
                <Route path='/product/:productId' element={<ProductDetails />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/product-detail/:productId' element={<ProductDetails />}></Route>
                <Route path='/about' element={<CompanyPage />}></Route>
                <Route path='/journal' element={<JournalPage />}></Route>
                <Route path='/journaldetail' element={<JournalDetailPage />}></Route>
                <Route path='/refund' element={<RefundPage />}></Route>
                <Route path='/privacy' element={<PrivacyPage />}></Route>
                <Route path='/term' element={<TermPage />}></Route>
                <Route path='/contact' element={<ContactUsPage />}></Route>
                <Route path='/test' element={<TestPage />}></Route>






                {/* <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route> */}



                {/* https://tailwindui.com/components/ecommerce/components/product-overviews */}
                {/* <ProductDetails /> */}

                {/* <Checkout /> */}
            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRouters