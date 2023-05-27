import { Link } from "react-router-dom"
import "../../styles/Index.css";

export const ButtonShopNow = () => {
  return (
    <Link to={'/shop'} className="carousel-button mt-4">Shop now</Link>
  )
}
