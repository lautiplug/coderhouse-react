import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const ViewBagDetailsPrice = () => {
  const { cart } = useCartContext();

  let total = 0;
  let tax = 0;
  let totalPrice = 0;

  cart.forEach((item) => {
    tax = (item.price * item.quantity * 12) / 100;
    total = total + item.price * item.quantity;
    totalPrice = totalPrice + item.price * item.quantity + tax;
  });

  return (
    <section className="order-summary">
      <h3 className="order-summary-title">Order summary</h3>
      <h4 className="order-summary-title">CACART378629636</h4>
      <hr />
      <ul className="order-details-total">
        <li className="order-details-li">
          <p>Subtotal:</p>
          <p className="order-detail-right">${total}</p>
        </li>
        <li className="order-details-li">
          <p>Shipping</p>
          <p className="order-detail-right">Free (Standard shipping)</p>
        </li>
        <li className="order-details-li">
          <p>Estimated tax</p>
          <p className="order-detail-right">${tax.toFixed(2)}</p>
        </li>
        <li className="order-details-li">
          <p>Estimated total: </p>
          <p className="order-detail-total">${totalPrice.toFixed(2)}</p>
        </li>
      </ul>
      <hr />
      <div className="details">
        <h3>Details</h3>
        <p className="details-text">
          You will be charged at the time of shipment. If this is a personalized
          or made-to-order purchase, you will be charged at the time of
          purchase.
        </p>
        <div className="checkout-container">
            <Link className="button-details-link" to={"/Bag Details"}>
              Checkout
            </Link>
        </div>
      </div>
    </section>
  );
};
