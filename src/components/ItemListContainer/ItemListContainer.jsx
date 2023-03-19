import React, { useEffect, useState } from 'react'
import './ItemListContainer.css';
import { Link } from 'react-router-dom';
import heart from '../../images/heart.png'
import heartBlack from '../../images/heartBlack.png'
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export const ItemListContainer = () => {

  const [items, setItems] = useState()

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

  console.log(items)

  return (
    <>
      {
        items ?
          <section className="container-products animate__animated animate__fadeIn">
            <div className="hero-products">
              <h1 className='hero-products-title'>WOMEN'S HANDBAGS</h1>
              <p className="hero-products-hr">  </p>
              <p className="hero-products-subtitle">Gucci handbags for women mix signature lines with diverse designs, like totes, top handle, shoulder bags and belt bags in leather and precious materials.</p>
              {/* category >, Line > (All), Sort by > (NEWEST) */}
            </div>
            <div className='products-actions'>
              <h1 className="title-index">WOMEN | Handbags</h1>
              <div className='product-selects'>
                <div class="dropdown">
                  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">All ({items.length})</a></li>
                    <li><a class="dropdown-item" href="#">Shoulder Bags For Women ({items.length})</a></li>
                    <li><a class="dropdown-item" href="#">Totes Bags For Women({items.length})</a></li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Line
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">All</a></li>
                    <li><a class="dropdown-item" href="#">Aphrodite</a></li>
                    <li><a class="dropdown-item" href="#">Blondie</a></li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sort by: Newest
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Newest</a></li>
                    <li><a class="dropdown-item" href="#">Price - high to low</a></li>
                    <li><a class="dropdown-item" href="#">Price - low to high</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container__products animate__animated animate__fadeIn">
              {items.map((product) => (
                <>
                  <Link className="container__product-card" to={`/item/${product.id}`}>
                    <div className="product-link">
                      <img className='img-product' src={product.image} alt="" />
                      <p className="product-title">{product.title}</p>
                      <h3 className='product-price'>${product.price}</h3>
                      <button className='product-buy-button'>Shop this </button>
                    </div>
                  </Link>
                </>
              ))}
            </div>
          </section>
          :
          <div class="text-center animate__animated animate__fadeIn">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
      }
    </>
  )
}