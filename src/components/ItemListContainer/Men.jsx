import React, { useEffect, useState } from 'react'
import './ItemListContainer.css';
import { getDocs, getFirestore, collection } from 'firebase/firestore'

export const Men = () => {

  const [items, setItems] = useState()

  // same than ItemListContainer but now with "Men" category

  useEffect(() => {
    const db = getFirestore()
    const djRefCollection = collection(db, 'Men')

    getDocs(djRefCollection).then((snapshot) => {
      if (snapshot === 0) {
        console.log("No hay resultados")
      }
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    })

  }, [])


  return (
    <>
      <div className="hero-products-men">
        <p className="hero-products-subtitle-women">GUCCI SPRING SUMMER</p>
        <h1 className='hero-products-title'>MEN</h1>
      </div>
      {
        items ?
          <div className='grid-layout'>
            {items.map((product) => (
              <div key={product.id} className="grid">
                <img className='image-layout' src={product.image} alt="" />
                <h1 className='layout-title'>{product.title}</h1>
                <h2 className="layout-subtitle">Discover more <i className="fa-sharp fa-solid fa-angle-right angle-subtitle"></i></h2>
              </div>
            ))}
          </div>
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