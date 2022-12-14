import './App.css';

import React from 'react';
// import Calculator from './Components/Calculator';
import Navbar from './Components/Navbar';
import Quote from './Components/pages/Quote';
// import Home from './Components/pages/Home';

export default function App() {
  return (
    <div>
      <Navbar />
      {/* <Calculator /> */}
      {/* <Home /> */}
      <Quote />
    </div>
  );
}
