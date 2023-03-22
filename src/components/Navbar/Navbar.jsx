import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartComponent } from "../CartComponent/CartComponent";
import headerTitle from '../../images/headertitle.png'
import "./Navbar.css";

function Navbar() {

  /* scroll effect in pc view */
  window.addEventListener("scroll", () => {
    let header = document.querySelector('.header');
    header.classList.toggle("active", window.scrollY > 50)
  })

  const [show, setShow] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="navbar-top-header">
          <i className="fa-solid fa-bars" onClick={() => setShow(true)}><span style={{ marginLeft: "5px", color: "#AAA6A2" }}>Menu</span></i>
          <div className="header-place">
            <i className="fa-sharp fa-solid fa-location-dot"><span className="country">Canada</span></i>
            <p className="language-site">English</p>
            <i className="fa-solid fa-phone"><span className="number-phone-header">+1.877.482.2499</span></i>
          </div>
          <Link className="header-title-link" to={"/"}><img src={headerTitle} className="header-title"></img></Link>
          <div className="header-actions">
            <i className="fa-regular fa-heart header-icon"></i>
            <CartComponent />
            <i className="fa-solid fa-magnifying-glass header-icon-right"></i>
          </div>
        </nav>
        <div className={show ? "menu--active" : "menu"}>
          <i onClick={() => setShow(false)} className="fa-regular fa-x" style={{ color: "#000000", }}></i>
          <nav className="navbar">
            <ul className="navbar-ul">
              <li className="navbar-li">
                <Link onClick={() => setShow(false)} className="navbar-links" to={"/"}>
                  What's new
                </Link>
                <Link onClick={() => setShow(false)} className="navbar-links" to={"/shop"}>
                  Handbags
                </Link>
                <Link onClick={() => setShow(false)} className="navbar-links" to={"/women"}>
                  Women
                </Link>
                <Link onClick={() => setShow(false)} className="navbar-links" to={"/men"}>
                  Men
                </Link>
                <Link onClick={() => setShow(false)} className="navbar-links" to={"/soon"}>
                  Children
                </Link>
                <Link onClick={() => setShow(false)} className="navbar-links" to={"/soon"}>
                  Jewelry & Watches
                </Link>
                <Link onClick={() => setShow(false)} className="navbar-links" to={"/soon"}>
                  Décor & Lifestyle
                </Link>
                <Link onClick={() => setShow(false)} className="navbar-links" to={"/soon"}>
                  Beauty
                </Link>
                <Link onClick={() => setShow(false)} className="navbar-links" to={"/soon"}>
                  Gifts
                </Link>
                <Link onClick={() => setShow(false)} className="navbar-links" to={"/soon"}>
                  Vault
                </Link>
              </li>
            </ul>

          </nav>
        </div>

      </header>

    </>
  );
}

export default Navbar;
