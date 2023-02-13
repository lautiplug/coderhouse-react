import React from 'react';
import ReactDOM from 'react-dom/client';
import { ItemListContainer } from './components/ItemListContainer';
import Navbar from './components/Navbar';
import './components/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <ItemListContainer title="Welcome to Plug BA!"/>
  </React.StrictMode>
);