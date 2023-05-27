import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from '../context/CartContext'
import { Index } from '../pages/Index/Index'
import { ItemListContainer } from '../pages/ItemListContainer/ItemListContainer'
import { ItemDetail } from '../pages/ItemDetail/ItemDetail'
import { ViewDetails } from '../pages/Checkout/Checkout'
import { FormPreBuy } from '../pages/Form/FormPreBuy'
import { Men } from '../pages/ItemListContainer/Men'
import { Women } from '../pages/ItemListContainer/Women'
import { ComingSoon } from '../pages/ComingSoon/ComingSoon'
import Navbar from '../ui/Navbar/Navbar'


export const GucciRoutes = () => {
  return (
    <CartProvider value={"ll"}>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Index title={"Welcome to Plug BA!"}/>}/>
          <Route exact path='/shop' element={<ItemListContainer/>}/>
          <Route exact path='/women' element={<Women/>}/>
          <Route exact path='/men' element={<Men/>}/>
          <Route exact path='/soon' element={<ComingSoon/>}/>
          <Route exact path='/item/:id' element={<ItemDetail/>}/>
          <Route exact path='/Bag Details' element={<ViewDetails/>}/>
          <Route exact path='/Form' element={<FormPreBuy/>}/>
        </Routes>
    </CartProvider>
  )
}
