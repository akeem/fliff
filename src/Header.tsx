import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'

export const Header: React.FC = () => {
  return (
    <header>
      <h1 className="header-title">
        FLiFF
      </h1>
      <Link to="/">Begin</Link>
    </header>
  )
};

export default Header;
