import bag1 from "../../images/bag1.avif";
import bag2 from "../../images/bag2.avif";
import bag3 from "../../images/bag3.avif";
import larrow from '../../images/left-arrow.png'
import rarrow from '../../images/right-arrow.png'
import "../Index/Index.css";
import { ButtonShopNow } from "./IndexShopNow";

export const IndexCarouselBag = () => {
  return (
    <div className="bag-container">
      <div id="carouselExampleRide" className="carousel slide bag-carousel" data-bs-ride="true">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bag1} className="d-block bag-img" alt="..." />
            <p className="carousel-bag-text">Gucci Deco small shoulder bag</p>
            <ButtonShopNow/>
          </div>
          <div className="carousel-item">
            <img src={bag2} className="d-block bag-img" alt="..." />
            <p className="carousel-bag-text">Gucci Deco small shoulder bag</p>
            <ButtonShopNow/>
          </div>
          <div className="carousel-item">
            <img src={bag3} className="d-block bag-img" alt="..." />
            <p className="carousel-bag-text">Gucci Deco small shoulder bag</p>
            <ButtonShopNow/>
          </div>
        </div>
        <button
          className="carousel-control-prev ccontrol-d"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <img src={larrow} className="icon" aria-hidden="true"></img>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next ccontrol-d"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <img src={rarrow} className="icon" aria-hidden="true"></img>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
