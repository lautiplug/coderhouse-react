import React, { useState } from "react";

export const CartComponent = () => {

  const [show, setShow] = useState(false)

  return (
    <>
      <div className="counter-contain">
        <i onClick={() => setShow(true)} className="fa-solid fa-bag-shopping"></i>
        <span className="counter-number">1</span>
      </div>
    {
      <div id="carrito" className={show ? "cart__table--active" : "cart__table"}>
      <div id="cart-items">
      <i onClick={() => setShow(false)} className="fa-solid fa-x"></i>
        <div>
          <h2 className="cart-title"> </h2>
        </div>
      </div>
      <button className="buttonCheckout">
        <a href="html/sneakers.html" id="checkout" className="cart-empty">
          Your cart is empty!
        </a>
      </button>
    </div> 
    }
      
    </>
  );
}
