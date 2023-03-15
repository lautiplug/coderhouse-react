import React, { useState } from "react";
import shoppingbag from '../../images/shopping-bag.png'
import "./CartComponent.css";
import { useCartContext } from "../../context/CartContext";
import { CartTotal } from "./CartTotal";

export const CartComponent = () => {
  const [show, setShow] = useState(false);

  const { cart } = useCartContext();

  let qty = 0
  
  cart.forEach((item) => {
    qty = item.quantity;
  });

  return (
    <>
      <div className="counter-contain">
        <img src={shoppingbag}
          onClick={() => setShow(true)}
          className="fa-solid fa-bag-shopping"
        ></img>
        <span className="counter-number">{qty}</span>
      </div>
      {
        <div
          id="carrito"
          className={show ? "cart__table--active" : "cart__table"}
        >
          <i
            onClick={() => setShow(false)}
            className="fa-solid fa-x close-cart"
          ></i>
          <h2 className="cart-title"> CART </h2>
          <hr />
          {cart.map((item) => {
            return (
              <>
                <div className="cart-product-box">
                  <div className="cart-product">
                    <img className="cart-img" src={item.image}></img>
                    <div className="cart-product-detail-container">
                      <h3 className="cart-product-detail-text cpt">
                        {item.title}
                      </h3>
                      <h4 className="cart-product-detail-text">
                        Quantity: {item.quantity}
                      </h4>
                      <h5 className="cart-product-detail-text">
                        Price: ${item.price.toFixed(2)}
                      </h5>
                      <h6 className="cart-product-detail-text fwb">
                        AVAILABLE
                      </h6>
                    </div>
                  </div>
                  <hr />
                </div>
              </>
            );
          })}

          <CartTotal/>
        </div>
      }
    </>
  );
};
