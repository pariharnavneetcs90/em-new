import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './State/store';
// import MiddleBanner from './customer/components/MiddleBanner/MiddleBanner';
// import Navigation from './customer/components/Navbar/Nagivation';
import { ThemeProvider } from "@material-tailwind/react";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
  <ThemeProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      {/* <Navigation /> */}
      {/* <MiddleBanner /> */}

    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);