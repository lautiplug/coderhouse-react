import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './components/Index';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { Electronics } from './components/ItemListContainer/Electronics';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Jewelery } from './components/ItemListContainer/Jewelery';
import Navbar from './components/Navbar/Navbar';
import './components/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<App title={"Welcome to Plug BA!"}/>}/>
      <Route exact path='/shop' element={<ItemListContainer/>}/>
      <Route exact path='/electronics' element={<Electronics/>}/>
      <Route exact path='/jewelery' element={<Jewelery/>}/>
      <Route exact path='/item/:id' element={<ItemDetail/>}/>
    </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);