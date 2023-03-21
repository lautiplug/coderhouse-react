import { Link } from "react-router-dom"
import { doc, getDoc, getDocs, getFirestore, collection, where, query } from 'firebase/firestore'
import { useEffect, useState } from "react"

export const Confirmation = () => {

    const [items, setItems] = useState()

    useEffect(() => {
        const db = getFirestore();

        const q = query(
            collection(db, 'items'),
            where('stock', '<=', 5)
        )

        getDocs(q).then((snapshot) => {
            if (snapshot === 0) {
                console.log("No hay resultados")
            }
            setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })
    }, [])

    console.log(items)

    return (
        <>
            <div className="hero-products-checkout">
                <p className="hero-products-subtitle-women">YOUR ORDER WAS COMPLETED SUCCESFULLY.</p>
            </div>
            <div class="modal-content-confirmated modal-box rounded-0">
                <h1 class="modal-title text-dark text-center mb-4" id="exampleModalLabel">Thanks for you order! You'll receive a ticket to continue your experience soon...</h1>
                <div className="buttons-bag-container gap-2">
                    <Link className="checkout-container button-details-link-confirmed" to={"/"}>
                        Keep buying.
                    </Link>
                </div>
            </div>

            <h1 className="m-5 text-center fw-bold">You also may like</h1>

            {
                items ?
                    <div className='grid-layout'>
                        {items.map((product) => (
                            <div className="grid-mal">
                                <img className='image-layout-mal' src={product.image} alt="" />
                                <h2 className="layout-subtitle">Discover more <i class="fa-sharp fa-solid fa-angle-right angle-subtitle"></i></h2>
                            </div>
                        ))}
                    </div>
                    :
                    console.log('hola')
            }
        </>
    )
}
