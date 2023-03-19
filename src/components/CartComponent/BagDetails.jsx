import { Link } from "react-router-dom"

export const BagDetails = () => {
    return (
        <div className="checkout-container">
            <Link className="button-bag-details-link" to={"/Bag Details"}>
                View Bag Details
            </Link>
        </div>
    )
}
