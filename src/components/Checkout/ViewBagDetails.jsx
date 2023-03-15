import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import "../Checkout/Checkout.css";
import { ViewBagDetailsPrice } from "./ViewBagDetailsPrice";

export const ViewDetails = () => {
  const { cart } = useCartContext();
  const [qty, setQty] = useState(1)
  
  const onClickPlus = () => {
    if(qty >= 5) return
    cart.forEach((item) => {
      setQty(item.quantity + qty);
    });
  }

  const onClickLess = () => {
    if(qty === 1) return
    cart.forEach((item) => {
      setQty(qty - item.quantity);
    });
  }

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
                                Price: ${item.price * qty}
                              </h5>
                              <div className="baglist-qty">
                                <button className="button-qty" onClick={onClickLess}> -1 </button>
                                <h4 className="baglist-qty-price"> QTY: {item.quantity}</h4>
                                <button className="button-qty" onClick={onClickPlus}> +1 </button>
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
        </div>
      </section>
    </>
  );
};
