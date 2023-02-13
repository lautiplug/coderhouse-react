import React from 'react'
import { CartWidget } from "./CartWidget";

function Navbar() {
  return (
    <>
      <header className='header'>
        <nav className='navbar'>
          <h1 className="header-title">Plug BA</h1>
            <ul className='navbar-ul'>
                <li className='navbar-li'>
                    <a className='navbar-links' href="">Home</a>
                    <a className='navbar-links' href="">Sneakers</a>
                    <a className='navbar-links' href="">Jackets</a>
                    <a className='navbar-links' href="">Clocks</a>
                    <a className='navbar-links' href="">Accessories</a>
                    <a className='navbar-links' href="">Gifts</a>
                </li>
            </ul>
          </nav>
            <CartWidget />
        </header>
    </>
  );
}

export default Navbar;
