import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import { BrowserRouter } from 'react-router-dom'

const firebaseConfig = {
  apiKey: "AIzaSyCNbu-gdbC-ZNgex-Ctlt__eltX41l7MR8",
  authDomain: "coderhouse-ecommerce-b5f87.firebaseapp.com",
  projectId: "coderhouse-ecommerce-b5f87",
  storageBucket: "coderhouse-ecommerce-b5f87.appspot.com",
  messagingSenderId: "254299122085",
  appId: "1:254299122085:web:6d371c325d440114a3e04c"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
