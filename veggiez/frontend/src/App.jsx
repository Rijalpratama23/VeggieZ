import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Page/Login/Login';
import Home from './Page/Home/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
