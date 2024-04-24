
import './App.css';
import Head from './customer/components/Navbar/Head';
import { HomePage } from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import CartEcom from './customer/components/CartEcom/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './customer/Routers/CustomerRouters';
import AdminRouters from './customer/Routers/AdminRouters';


function App() {
  return (
    <div>

      <Routes>
        <Route path='/*' element={<CustomerRouters />}></Route>
        <Route path='/admin/*' element={<AdminRouters />}></Route>
      </Routes>


      <div>
        {/* <Product /> */}
        {/* https://tailwindui.com/components/ecommerce/components/product-overviews */}
        {/* <ProductDetails /> */}
        {/* <CartEcom /> */}
        {/* <Checkout /> */}
      </div>

    </div>

  );
}

export default App;

