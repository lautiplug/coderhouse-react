import React, { useContext, useEffect, useState } from "react"
import 'react-toastify/dist/ReactToastify.css';

const CartContext = React.createContext('')

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children, id }) => {

  const cartLS = JSON.parse(localStorage.getItem('cart')) || []
  const [cart, setCart] = useState(cartLS);

  // add item to cart //

  const addProduct = (item) => {
    if (isInCart(item.id)) {
      setCart(cart.map((product) => {
        if (product.id === item.id && item.quantity < item.stock) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      }));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  

  // Show quantity in cart //

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  // Decrement quantity of items //

  const decrementItem = (item) => {
    if (isInCart(item.id)) {
      setCart(cart.map((product) => {
        return product.id === item.id && item.quantity > 1 ? { ...product, quantity: product.quantity - 1 }
          : product
      }));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // clear cart //

  const clearCart = () => {
    setCart([])
  }

  // check if product is already in cart //

  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  }

  // remove product from cart //

  const removeProduct = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  }

  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct,
      quantity,
      decrementItem,
      cart
    }}>
      {children}
    </CartContext.Provider>
  )
}
