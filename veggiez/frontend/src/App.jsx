import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Page/Login/Login';
import Home from './Page/Home/Home';
import Shop from './Page/shop/Shop';
import Product from './Page/product/Product';
import Contact from './Page/contact/Contact';
import About from './Page/about/About'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
