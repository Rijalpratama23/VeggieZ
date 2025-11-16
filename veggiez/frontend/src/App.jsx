import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Page/Login/Login';
import Home from './Page/Home/Home';
import Profile from './Page/profile/Profile';
import Keranjang from './Page/keranjang/Keranjang';
import Promo from './Page/promo/Promo';
import Product from './Page/product/Product';
import Contact from './Page/contact/Contact';
import About from './Page/about/About'
import Setting from './Page/Setting/Setting'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/keranjang" element={<Keranjang />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
};

export default App;
