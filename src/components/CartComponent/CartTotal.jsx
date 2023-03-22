import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const CartTotal = () => {
  const { cart } = useCartContext();

  let totalPrice = 0
  
  cart.forEach((item) => {
    totalPrice = totalPrice + item.price * item.quantity;
  });

  // A little conditional return

  if (cart.length < 1) {
    return (
      <div className="checkout-container">
          <Link className="button-details-link" to={"/shop"}>
            Your bag is empty, start to buy!
          </Link>
      </div>
    );
  }
  else{
    return (
      <div className="checkout-container">
          <Link className="button-details-link" to={"/Form"}>
            ${totalPrice.toFixed(2)} | Checkout
          </Link>
      </div>
    )
  }
};


