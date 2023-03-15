import { ButtonShopNow } from "./IndexShopNow"
import larrow from '../../images/left-arrow.png'
import rarrow from '../../images/right-arrow.png'

export const IndexCarousel = () => {
  return (
    <div
        id="carouselExampleAutoplaying"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-details">
              <h1 className="carousel-text">Gucci Guilty</h1>
              <ButtonShopNow/>
            </div>
            <div className="d-block w-100 carousel-img1"/>
          </div>
          <div className="carousel-item">
            <div className="carousel-details">
              <h1 className="carousel-text">Loafers & Moccasins</h1>
              <div className="carousel-button-par">
                <button className="carousel-button-flex">Shop men</button>
                <button className="carousel-button-flex">Shop women</button>
              </div>
            </div>
            <div className="d-block w-100 carousel-img2"/>
          </div>
          <div className="carousel-item">
            <div className="carousel-details">
              <h1 className="carousel-text-b">Ophidia</h1>
              <ButtonShopNow/>
            </div>
            <div className="d-block w-100 carousel-img3"/>
          </div>
          <div className="carousel-item">
            <div className="carousel-details">
              <h1 className="carousel-text">Gucci Spring Summer 2023</h1>
              <ButtonShopNow/>
            </div>
            <div className="d-block w-100 carousel-img4"/>
          </div>
        </div>
        <button className="carousel-control-prev ccontrol" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <img src={larrow} className=" icon-w" aria-hidden="true"></img>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next ccontrol" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="visually-hidden">Next</span>
        <img src={rarrow} className=" icon-w" aria-hidden="true"></img>
        </button>
      </div>
  )
}
