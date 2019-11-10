import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'mustard-ui';
import './nav.css';
import Address from './Address'

export const Nav = () => {
  const [address, setAddress] = useState('')
  useEffect(() => {
    async function getAddress() {
      const addresses = await (window as any).provider.listAccounts()
      if (addresses.length) {
        setAddress(addresses[0])
      }
    }

    getAddress();
  }, []);
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/"><span>FLi</span><span>FF</span></Link>
        </div>
        <div className="address">
          <Address address={address} />
        </div>
      </div>
    </nav>
  )
}

export default Nav
