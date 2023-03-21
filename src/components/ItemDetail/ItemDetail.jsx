import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useCartContext } from "../../context/CartContext";
import larrow from "../../images/left-arrowGL.png";
import rarrow from "../../images/right-arrowG.png";

import "./ItemDetail.css";

export const ItemDetail = () => {

  const [items, setItems] = useState();
  const { id } = useParams();

  useEffect(() => {
    
    const db = getFirestore();
    const djRef = doc(db, "items", `${id}`);

    getDoc(djRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItems({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, []);

  const { addProduct } = useCartContext();

  return (
    <div className="detail-item-container">
      {items ? (
        <div className="item-container">
          <div id="carouselExample" class="carousel slide">
            <div
              class="carousel-inner"
              style={{ backgroundColor: `${items.colorBGC}` }}
            >
              <div class="carousel-item active">
                <div className="detail-item animate__animated animate__fadeIn" key={items.id}>
                  <img className="img-detail a" src={items.girlWBag}></img>
                  <img className="img-front-first" src={items.imageFront}></img>
                </div>
              </div>
              <div class="carousel-item">
                <div
                  className="detail-item animate__animated animate__fadeIn"
                  key={items.id}
                >
                  <img className="img-front a" src={items.imageSemiFront}></img>
                  <img className="img-detail" src={items.girlFront}></img>
                </div>
              </div>
              <div class="carousel-item">
                <div
                  className="detail-item animate__animated animate__fadeIn"
                  key={items.id}
                >
                  <img className="img-front" src={items.imageFDown}></img>
                  <img className="img-front" src={items.imageBack}></img>
                </div>
              </div>

              <div class="carousel-item">
                <div className="detail-item animate__animated animate__fadeIn" key={items.id}>
                  <img className="img-front" src={items.imageLeft}></img>
                  <img className="img-front" src={items.imageRight}></img>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <img src={larrow} className="icon" aria-hidden="true"></img>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <img src={rarrow} className="icon" aria-hidden="true"></img>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className="actions">
            <div className="actions-card">
              <h1 className="actions-card-title">{items.title}</h1>
              <span className="divider"></span>
              <p className="actions-card-p">${items.price}</p>
              <p className="actions-card-type"><i class="fa-solid fa-circle" style={{ color: `${items.colorCircle}` }}></i>{items.bagType}</p>
              <p className="actions-card-p">AVAILABLE</p>
              <p className="actions-card-selection">Your selection is available for immediate purchase online</p>
              <button onClick={() => addProduct(items)} className="actions-card-button">
                Add to shopping bag
              </button>
            </div>
          </div>
        </div>
      ) : 
      <div class="text-center animate__animated animate__fadeIn">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      }
      <ToastContainer />
    </div>
  );
};

{
  /*   <div className="actions-card"> 
<h1 className="actions-card-title">{items.title}</h1>
<p className="actions-card-p">${items.price}</p>
<p className="actions-card-p">AVAILABLE</p>
<button onClick={() => addProduct(items)} className="actions-card-button">Add to shopping bag</button>
</div> */
}

{
  /* <div className="detail-item animate__animated animate__fadeIn" key={items.id}>

  <img className="img-detail a" src={items.girlWBag}></img>
  <div className="actions-card"> 
    <h1 className="actions-card-title">{items.title}</h1>
    <p className="actions-card-p">${items.price}</p>
    <p className="actions-card-p">AVAILABLE</p>
    <button onClick={() => addProduct(items)} className="actions-card-button">Add to shopping bag</button>
  </div>
  <img className="img-front" src={items.imageFront}></img>
</div> */
}
