import React, { useEffect, useState } from "react";
import shoppingbag from '../../images/shopping-bag.png'
import "./CartComponent.css";
import { useCartContext } from "../../context/CartContext";
import { CartTotal } from "./CartTotal";
import { BagDetails } from "./BagDetails";

export const CartComponent = () => {
  const [show, setShow] = useState(false);

  const { cart, quantity, decrementItem, addProduct} = useCartContext();

  // receiving context and using useState to show/hide cart

  return (
    <>
      <div className="counter-contain">
        <img src={shoppingbag} onClick={() => setShow(true)} className="fa-solid fa-bag-shopping" alt="Imagen estilo icono del carrito"></img>
        <span className="counter-number">{quantity}</span>
      </div>
      {
        <div
          id="carrito" className={show ? "cart__table--active" : "cart__table"}>
          <i
            onClick={() => setShow(false)}
            className="fa-solid fa-xmark close-cart"
          ></i>
          <h2 className="cart-title"> CART </h2>
          <hr />
          {cart.map((item) => {
            return (
                <div key={item.id} className="cart-product-box">
                  <div className="cart-product">
                    <img className="cart-img" src={item.image} alt="Se muestra en el carrito la imagen del producto agregado"></img>
                    <div className="cart-product-detail-container">
                      <div className="cart-product-detail">
                        <h3 className="cart-product-detail-text cpt">
                          {item.title}
                        </h3>
                        <div className="cart-qty">
                          <button className="button-cart-qty" onClick={() => decrementItem(item)}><i className="fa-solid fa-angle-left"></i></button>
                          <h4 className="baglist-qty-price">
                            QTY: {item.quantity}</h4>
                          <button className="button-cart-qty" onClick={() => addProduct(item)}><i className="fa-sharp fa-solid fa-angle-right"></i></button>
                        </div>
                        <h5 className="cart-product-detail-text">
                          Price: ${item.price}
                        </h5>
                        <h6 className="cart-product-detail-text fwb">
                          AVAILABLE
                        </h6>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
            );
          })}
          <div className="buttons-bag-container">
            <BagDetails/>
            <CartTotal />
          </div>
        </div>
      }
    </>
  );
};
