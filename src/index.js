import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ViewDetails } from './components/Checkout/Checkout';
import { Index } from './components/Index/Index';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Jewelery } from './components/ItemListContainer/Jewelery';
import Navbar from './components/Navbar/Navbar';
import { CartProvider } from './context/CartContext';
import { initializeApp } from "firebase/app";
import { FormPreBuy } from './components/Form/FormPreBuy';
import { Women } from './components/ItemListContainer/Women';

const firebaseConfig = {
  apiKey: "AIzaSyCNbu-gdbC-ZNgex-Ctlt__eltX41l7MR8",
  authDomain: "coderhouse-ecommerce-b5f87.firebaseapp.com",
  projectId: "coderhouse-ecommerce-b5f87",
  storageBucket: "coderhouse-ecommerce-b5f87.appspot.com",
  messagingSenderId: "254299122085",
  appId: "1:254299122085:web:6d371c325d440114a3e04c"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider value={"ll"}>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Index title={"Welcome to Plug BA!"}/>}/>
            <Route exact path='/shop' element={<ItemListContainer/>}/>
            <Route exact path='/women' element={<Women/>}/>
            <Route exact path='/jewelery' element={<Jewelery/>}/>
            <Route exact path='/item/:id' element={<ItemDetail/>}/>
            <Route exact path='/Bag Details' element={<ViewDetails/>}/>
            <Route exact path='/Form' element={<FormPreBuy/>}/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);