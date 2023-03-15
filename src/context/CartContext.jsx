import React, { useContext, useState } from "react"
const CartContext = React.createContext('')

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  // add item to cart

  const addProduct = (item) => {

    const quantity = 1

    if(isInCart(item.id)){
      setCart(cart.map(product => {
        return product.id === item.id ? {...product, quantity: quantity + product.quantity} : product;
      }))
    } else {
      setCart([...cart, {...item, quantity}]);
    }
  }

  console.log(cart)

  // clear cart

  const clearCart = () => {
    setCart([])
  }

  // check if product is already in cart

  const isInCart = (id) => {
    return cart.find(product => product.id === id) ? true : false
  }

  // remove product from cart 

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct,
      cart
    }}>
      {children}
    </CartContext.Provider>
  )
}
