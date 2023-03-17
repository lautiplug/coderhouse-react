import React, { useContext, useState } from "react"
const CartContext = React.createContext('')

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children, id}) => {

  const [cart, setCart] = useState([]);

  // add item to cart

  const addProduct =(item) =>{
      if(isInCart(item.id)){
        setCart(cart.map((product) => {
         return product.id === item.id ? {...product , quantity: product.quantity + 1} 
        : product
        }));
      }
      else{
        setCart([...cart, {...item, quantity: 1}]);
      }
  }
/*   const addProduct = (item) => {
    setCart((cart) => {
      if (isInCart(item.id)) {
        return cart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...cart, { id, quantity: 1 }];
      }
    });
  }; */

  
  console.log(cart)
  
  // djasjads
  
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  
  const removeFromCart = (item) => {
    if(isInCart(item.id)){
      setCart(cart.map((product) => {
       return product.id === item.id && item.quantity > 1 ? {...product, quantity: product.quantity - 1} 
      : product
    }));
    }else{
      setCart([...cart, {...item, quantity: 1}]);
    }
  };
  // clear cart

  const clearCart = () => {
    setCart([])
  }

  // check if product is already in cart

  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  }

  // remove product from cart 

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
      removeFromCart,
      cart
    }}>
      {children}
    </CartContext.Provider>
  )
}
