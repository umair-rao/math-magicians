import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbarContainer">
      <div className="heading">
        <h1>Math Magician</h1>
      </div>
      <div className="navList">
        <li><Link className="navLink" to="/">Home</Link></li>
        <li><Link className="navLink" to="Calculator">Calculator</Link></li>
        <li><Link className="navLink" to="Quote">Quote</Link></li>
      </div>
    </nav>
  );
}
