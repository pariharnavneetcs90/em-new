import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage'
import CartEcom from '../components/CartEcom/Cart'
import Navigation from '../components/Navbar/Nagivation'
import Footer from '../components/Footer/Footer'
import Product from '../components/Product/Product'
import ProductDetails from '../components/ProductDetails/ProductDetails'
// import PaymentSuccess from "../customer/Components/paymentSuccess/PaymentSuccess";
import Checkout from '../components/Checkout/Checkout'
import Company from '../pages/HomePage/Company'

const CustomerRouters = () => {
    return (
        <div>
            <div>

                <Navigation />
            </div>
            <Routes>
                <Route path='/login' element={<HomePage />}></Route>
                <Route path='/register' element={<HomePage />}></Route>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/cart' element={<CartEcom />}></Route>
                <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product />}></Route>
                <Route path='/product/:productId' element={<ProductDetails />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/product-detail/:productId' element={<ProductDetails />}></Route>
                <Route path='/company' element={<Company />}></Route>
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