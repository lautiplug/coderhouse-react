import React, { useEffect, useState } from 'react'
import './ItemListContainer.css';
import { Link } from 'react-router-dom';
import { doc, getDoc, getDocs, getFirestore, collection } from 'firebase/firestore'

export const Women = () => {

  const [items, setItems] = useState()

  useEffect(() => {
    const db = getFirestore()
    const djRefCollection = collection(db, 'Women')

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
      <div className="hero-products">
      <div className="hero-products">
              <p className="hero-products-subtitle-women">GUCCI SPRING SUMMER</p>
              <h1 className='hero-products-title'>WOMEN</h1>
            </div>
      </div>
      {
        items ?
          <div className='grid-layout'>
            {items.map((product) => (
              <div className="grid">
                <img className='image-layout'src={product.image} alt="" />
                <h1 className='layout-title'>{product.title}</h1>
                <h2 className="layout-subtitle">Discover more <i class="fa-sharp fa-solid fa-angle-right angle-subtitle"></i></h2>
              </div>
            ))}
          </div>
          :
          <p className='loading'>Cargando...</p>
      }
    </>
  )
}