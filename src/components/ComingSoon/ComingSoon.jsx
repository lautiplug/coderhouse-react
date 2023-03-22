import { Link } from 'react-router-dom'
import gucciSoon from '../../images/gucci.png'
import './ComingSoon.css'

export const ComingSoon = () => {
    return (
        <div className='soon-container'>
            <div className="hero-products-soon"></div>
            <div className="img-coming-soon">
                <img className='img-gucci-soon' src={gucciSoon} alt="" />
            </div>
            <div className='details-text-soon'>
                <h1>Thanks for visiting my site.</h1>
                <p>This site is launching soon! Follow us for updates and be the first to know. </p>
            </div>
            <div className="checkout-container-soon">
                <Link className="button-details-soon" to={"/"}>
                    Go to home!
                </Link>
                <Link className="button-details-right" to={"https://facebook.com"}>
                    Visit my github.
                </Link>
            </div>
        </div>
    )
}
