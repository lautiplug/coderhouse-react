import React, { useEffect, useState } from 'react'
import './ItemListContainer.css';
import { Link } from 'react-router-dom';
import {doc, getDoc, getDocs, getFirestore, collection} from 'firebase/firestore'

export const Electronics = () => {

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
      <section className="container">
        <h1 className="title-index">Products</h1>
        <div className="container__products animate__animated animate__fadeIn">
              {items.map((product) => (
                <>
                  <div className="container__product-card">
                    <Link className="product-link" to={`/item/${product.id}`}>  
                    <img className='img-product' src={product.image} alt="" />
                    </Link>
                    <p className="product-title">{product.title}</p>
                    <h3>${product.price}</h3>
                  </div>
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
/*   const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
    .then(response => response.json())
    .then(dataJson => setData(dataJson))
  }, [])

  console.log(data)
  

  return (
    <>
    {
      data ?
      <section className="container">
        <h1 className="title-index">Products</h1>
        <div className="container__products animate__animated animate__fadeIn">
              {data.map((product) => (
                <>
                  <div className="container__product-card">
                    <Link className="product-link" to={`/item/${product.id}`}>  
                    <img className='img-product' src={product.image} alt="" />
                    </Link>
                    <p className="product-title">{product.title}</p>
                    <h3>${product.price}</h3>
                  </div>
                </>
              ))}
        </div>
      </section>
      : 
      <p className='loading'>Cargando...</p>
    }
    
    </> */