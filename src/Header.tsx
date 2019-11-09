import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'
import logo from './fliff-logomark.svg'

export const Header: React.FC = () => {
  return (
    <header>
      <h3 className="header-subtitle">Show me the</h3>
      <h1 className="header-title">
        FLiFF
      </h1>
      <Link to="/list">
        <img src={logo} alt="Fliff Logomark" />
      </Link>
    </header>
  )
};

export default Header;
