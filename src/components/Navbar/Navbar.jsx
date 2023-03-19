import React from "react";
import { Link } from "react-router-dom";
import { CartComponent } from "../CartComponent/CartComponent";
import headerTitle from '../../images/headertitle.png'
import "./Navbar.css";

function Navbar() {

  window.addEventListener("scroll", () => {
    let header = document.querySelector('.header');
    header.classList.toggle("active", window.scrollY > 50)
  })

  return (
    <>
      <header className="header">
       <nav className="navbar-top-header">
        <div className="header-place">
          <i className="fa-sharp fa-solid fa-location-dot"><span className="country">Canada</span></i>
          <p className="language-site">English</p>
          <i className="fa-solid fa-phone"><span className="number-phone-header">+1.877.482.2499</span></i>
        </div>
        <Link to={"/"}><img src={headerTitle} className="header-title"></img></Link>
         <div className="header-actions">
           <i className="fa-regular fa-heart header-icon"></i>
           <CartComponent />
           <i className="fa-solid fa-magnifying-glass header-icon-right"></i>
         </div>
       </nav>
      <nav className="navbar">
      <div className="header-place-scroll">
          <i className="fa-sharp fa-solid fa-location-dot"><span className="country">Canada</span></i>
          <p className="language-site">English</p>
          <i className="fa-solid fa-phone"><span className="number-phone-header">+1.877.482.2499</span></i>
        </div>
          <ul className="navbar-ul">
            <li className="navbar-li">
              <Link className="navbar-links" to={"/"}>
                What's new
              </Link>
              <Link className="navbar-links" to={"/shop"}>
                Handbags
              </Link>
              <Link className="navbar-links" to={"/women"}>
                Women
              </Link>
              <Link className="navbar-links" to={"/jewelery"}>
                Men
              </Link>
              <a className="navbar-links" href="">
                Children
              </a>
              <a className="navbar-links" href="">
                Jewelry & Watches
              </a>
              <a className="navbar-links" href="">
                Décor & Lifestyle
              </a>
              <a className="navbar-links" href="">
                Beauty
              </a>
              <a className="navbar-links" href="">
                Gifts
              </a>
              <a className="navbar-links" href="">
                Vault
              </a>
            </li>
          </ul>

          <div className="header-actions-scroll">
           <i className="fa-regular fa-heart header-icon"></i>
           <CartComponent />
           <i className="fa-solid fa-magnifying-glass header-icon-right"></i>
         </div>
        </nav>

      </header>

    </>
  );
}

export default Navbar;
