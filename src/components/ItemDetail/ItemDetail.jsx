import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ButtonsCard } from "./ButtonsCard";
import './ItemDetail.css';

export const ItemDetail = () => {

  const {id} = useParams();
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(resp => resp.json())
    .then(dataJson => setProduct(dataJson))
  }, [id])

  return (
    <div className="detail-item-container">
      {
        product ? 
        
        <div className="detail-item animate__animated animate__fadeIn">
          <h1>{product.title}</h1>
          <img className="img-detail a" src={product.image}></img>
          <div className="function-add">
            <ButtonsCard/>
          </div>
          <button className="pokemon-link">Agregar al carrito</button>
        </div>
        :

        <p className='loading'>Cargando...</p>
      }
    </div>
  )
}
