import "../../styles/ItemListContainer.css";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export const ItemListContainer = () => {

  const [items, setItems] = useState()

  // showing info using useEffect and Firebase, I also add an spinner while data is loading.

  useEffect(() => {
    const db = getFirestore()
    const djRefCollection = collection(db, 'items')

    getDocs(djRefCollection).then((snapshot) => {
      if (snapshot === 0) {
        console.log("No hay resultados")
      }
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    })

  }, [])

  return (
    <>
      {
        items ?
          <section className="container-products animate__animated animate__fadeIn" key={items.id}>
            <div className="hero-products">
              <h1 className='hero-products-title'>WOMEN'S HANDBAGS</h1>
              <p className="hero-products-hr">  </p>
              <p className="hero-products-subtitle">Gucci handbags for women mix signature lines with diverse designs, like totes, top handle, shoulder bags and belt bags in leather and precious materials.</p>
            </div>
            <div className='products-actions'>
              <h1 className="title-index">WOMEN | Handbags</h1>
              <div className='product-selects' key={items.id}>
                <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                  </button>
                  <ul className="dropdown-menu">
                    <li key={items.id}><a className="dropdown-item" href="#">All ({items.length})</a></li>
                    <li key={items.id}><a className="dropdown-item" href="#">Shoulder Bags For Women ({items.length})</a></li>
                    <li key={items.id}><a className="dropdown-item" href="#">Totes Bags For Women({items.length})</a></li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Line
                  </button>
                  <ul className="dropdown-menu">
                    <li key={items.id}><a className="dropdown-item" href="#">All</a></li>
                    <li key={items.id}><a className="dropdown-item" href="#">Aphrodite</a></li>
                    <li key={items.id}><a className="dropdown-item" href="#">Blondie</a></li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sort by: Newest
                  </button>
                  <ul className="dropdown-menu">
                    <li key={items.id}><a className="dropdown-item" href="#">Newest</a></li>
                    <li key={items.id}><a className="dropdown-item" href="#">Price - high to low</a></li>
                    <li key={items.id}><a className="dropdown-item" href="#">Price - low to high</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container__products animate__animated animate__fadeIn" key={items.id}>
              {items.map((product) => (
                <Link key={product.id} className="container__product-card" to={`/item/${product.id}`}>
                  <div key={product.id} className="product-link">
                    <img className='img-product' src={product.image} alt="Imagenes que muestran distintos tipos de cartera gucci" />
                    <p className="product-title">{product.title}</p>
                    <h3 className='product-price'>${product.price}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          :
         <div className="text-center animate__animated animate__fadeIn">
           <div className="spinner-border" role="status">
             <span className="visually-hidden">Loading...</span>
           </div>
         </div>
      }
    </>
  )
}