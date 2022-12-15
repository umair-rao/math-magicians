import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Navbar from './Components/Navbar';
import Quote from './Components/pages/Quote';
import Home from './Components/pages/Home';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quote />} />
      </Routes>
    </>
  );
}
