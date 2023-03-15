import React, { useEffect, useState } from 'react'
import './ItemListContainer.css';
import { Link } from 'react-router-dom';

export const Jewelery = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
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
    
    </>
  )
}