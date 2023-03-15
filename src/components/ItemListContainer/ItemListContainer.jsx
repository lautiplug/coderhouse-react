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
        if(snapshot === 0){
          console.log("No hay resultados")
        }    
      setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
      })
  
    }, [])
  
    console.log(items)

    return(
      <>
      {
        items ?
        <section className="container-products">
          <div className="hero-products"></div>
          <h1 className="title-index">Products</h1>
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
        <p className='loading'>Cargando...</p>
      }
      </>
    ) 
  }