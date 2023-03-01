import React from 'react'
import { Link } from 'react-router-dom';
import { CartComponent } from '../CartComponent/CartComponent';

function Navbar() {
  return (
    <>
      <header className='header'>
        <nav className='navbar'>
          <h1 className="header-title">Plug BA</h1>
            <ul className='navbar-ul'>
                <li className='navbar-li'>
                    <Link className='navbar-links' to={"/"}>Home</Link>
                    <Link className='navbar-links' to={"/shop"}>Products</Link>
                    <Link className='navbar-links' to={"/electronics"}>Electronics</Link>
                    <Link className='navbar-links' to={"/jewelery"}>Jewelery</Link>
                    <a className='navbar-links' href="">Accessories</a>
                    <a className='navbar-links' href="">Gifts</a>
                </li>
            </ul>
          </nav>
            <CartComponent />
        </header>
    </>
  );
}

export default Navbar;
