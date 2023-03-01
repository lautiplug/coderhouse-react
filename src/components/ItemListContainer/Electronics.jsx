import React, { useEffect, useState } from 'react'
import './ItemListContainer.css';
import { Link } from 'react-router-dom';

export const Electronics = () => {

  const [data, setData] = useState(null)

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
        <h1 className="title-index">Electronics</h1>
        <div className="container__products animate__animated animate__fadeIn">
              {data.map((product) => (
                <>
                  <div className="container__product-card">
                    <img className='img-product' src={product.image} alt="" />
                    <p className="pokemon-title">{product.title}</p>
                    <h3>${product.price}</h3>
                    <Link className="pokemon-link" to={`/item/${product.id}`}>
                      Add to cart
                    </Link>
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