import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useCartContext } from "../../context/CartContext";
import "../Checkout/Checkout.css";
import { ViewBagDetailsPrice } from "./ViewCheckoutPrice";

export const ViewDetails = (id) => {
  const { cart, addProduct, decrementItem, removeProduct } = useCartContext();


  return (
    <>
      <div className="hero-products-checkout"></div>
      <section>
        <div className="container-container">
          <h1 className="bag-title-container">Your Selections:</h1>
          <div className="salvador">
            {cart.map((item) => {
              return (
                <div className="bag-content">
                  <div className="shopping-bag-content">
                    <hr className="hr-before-wr" />
                    <div className="shopping-bag-wrapper">
                      <img className="shopping-bag-img" src={item.image}></img>
                      <div className="baglist">
                        <div className="baglist-item-summary">
                          <div className="baglist-flex-details">
                            <h2 className="baglist-title">{item.title}</h2>
                            <div className="baglist-flex-side">
                              <h5 className="cart-product-detail-price">
                                Price: ${item.price * item.quantity}
                              </h5>
                              <div className="baglist-qty">
                                <button className="button-qty" onClick={() => decrementItem(item)}> -1 </button>
                                <h4 className="baglist-qty-price">
                                  QTY: {item.quantity}</h4>
                                <button className="button-qty" onClick={() => addProduct(item)}> +1 </button>
                              </div>
                            </div>
                          </div>
                          <p className="cart-product-detail-text">
                            style: #{item.id}
                          </p>
                          <p className="cart-product-detail-text">
                            Variation: {item.bagType}
                          </p>
                          <div className="cart-product-detail-container">
                            <h6 className="cart-product-detail-text fwb">
                              AVAILABLE
                            </h6>
                            <p className="cart-product-detail-selection">
                              Your selection is available for immediate purchase
                              online.
                            </p>
                            
                            <p className="delete-button" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</p>

                            <div key={item.id} class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content modal-box rounded-0">
                                  <div class="modal-header border-0">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                  <h1 class="modal-title text-dark text-center mb-4" id="exampleModalLabel">Are you sure you want to remove this item?</h1>
                                    <div className="modal-flex">
                                      <img className="img-modal" src={item.image} alt="" />
                                      <div className="text-modal">
                                        <h1 className="text-center text-dark">{item.title}</h1>
                                        <p className="text-center text-dark">style #{item.id}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="modal-footer border-0">
                                    <div className="buttons-bag-container gap-2">
                                      <button data-bs-dismiss="modal" className="checkout-container button-details-link">
                                        Cancel
                                      </button>
                                      <button data-bs-dismiss="modal"  onClick={() => removeProduct(item.id)} className="checkout-container button-bag-details-link">
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ViewBagDetailsPrice />
          <ToastContainer />
        </div>
      </section>
    </>
  );
};
