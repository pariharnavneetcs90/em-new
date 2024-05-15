
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
import { MOBILE } from './constant';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function App() {
  return (
    <div>

<FloatingWhatsApp
        accountName="Empressa"
        buttonClassName="whatsappButton"
        avatar="https://res.cloudinary.com/du5p1rnil/image/upload/v1713256699/empressa/ul5agvxpmsozwrahu5z0.png"
        phoneNumber={`${MOBILE}`}
        statusMessage="Typically replies within 1 hour"
        chatMessage={`Hello there! 🤝 How can we help?`}
        darkMode={false}
        buttonStyle={{position:"fixed",bottom:"60px"}}
        allowEsc
        allowClickAway
        notification
        notificationSound
      />

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

