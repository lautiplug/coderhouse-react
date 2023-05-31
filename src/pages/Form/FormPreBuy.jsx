import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import "../../styles/Form.css";
import swal from 'sweetalert';

export const FormPreBuy = () => {
  const { cart, clearCart } = useCartContext([])

  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');

  const db = getFirestore()

  const ordersCollection = collection(db, 'orders');

  let total = 0;
  let tax = 0;
  let totalPrice = 0;

  cart.forEach((item) => {
    tax = (item.price * item.quantity * 12) / 100;
    total = total + item.price * item.quantity;
    totalPrice = totalPrice + item.price * item.quantity + tax;
  });

  const handleSubmit = (e) => {

    e.preventDefault();

    // Object "order" with buyer info, items and total
    const order = {
      buyer: {
        name: buyerName,
        phone: buyerPhone,
        email: buyerEmail
      },
      items: [...cart],
      total: total
    };

    const goIndex = () => {
      <Navigate to="/" />
    }

    // Reset form after purchase
    const resetForm = () => {
      setBuyerName('');
      setBuyerPhone('');
      setBuyerEmail('');
      cart([]);
      clearCart()
      total(0);
    };

    // Adding a new document

    addDoc(ordersCollection, order)
      .then((docRef) => {
        swal(`Your order was confirmed succesfully!`, `Transaction ID: ${docRef.id}`);
        resetForm();
        goIndex()
      })
      .catch((e) => {
        console.log('Error al agregar el documento', e);
      });
  };

  return (

    <>
{      <div className="hero-products-checkout">
        <p className="hero-products-subtitle-checkout">CHECKOUT</p>
      </div>}
      <h2 className="title__h2-form">Complete the form to continue with the purchase.</h2>
      <div className='container-flex'>
        <form onSubmit={handleSubmit} className="form__container">

          <div className="form__login">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label fw-normal">Name.</label>
              <input type="text" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} className="form-control" id="formGroupExampleInput" placeholder="Your name" required="required" />
              <label htmlFor="formGroupExampleInput" className="form-label fw-normal">Email.</label>
              <input value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} type="email" className="form-control" id="formGroupExampleInput" placeholder="Email@email.com" required="required" />
              <label htmlFor="formGroupExampleInput" className="form-label fw-normal">Confirm your email.</label>
              <input value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} type="email" className="form-control" id="formGroupExampleInput" placeholder="Email@email.com" required="required" />
              <label htmlFor="formGroupExampleInput" className="form-label fw-normal">Your Phone.</label>
              <input value={buyerPhone} onChange={(e) => setBuyerPhone(e.target.value)} type="number" className="form-control" id="formGroupExampleInput" placeholder="24131234" required="required" />
              <button type="submit" value="submit" className="btn btn-danger mb-4 form__btn rounded-0" data-toggle="modal" data-target="#exampleModal">Confirm Buy (${total})</button>
            </div>
          </div>

          <div className="salvador-checkout">
            {cart.map((item) => {
              return (
                <>
                  <div key={item.id} className='item-detail-buy'>
                    <div className="bag-content-checkout">
                      <div className="shopping-bag-content">
                        <div className="shopping-bag-wrapper-checkout">
                          <img className="shopping-bag-img" src={item.image} alt="Imagen correspondiente al producto seleccionado"></img>
                          <div className="baglist">
                            <div className="baglist-item-summary">
                              <div className="baglist-flex-details-checkout">
                                <h2 className="baglist-title-form">{item.title}</h2>
                              </div>
                              <p className="cart-product-detail-text">
                                style: #{item.id}
                              </p>
                              <p className="cart-product-detail-text">
                                Variation: {item.bagType}
                              </p>
                              <h5 className="cart-product-detail-price-form">
                                Price: ${item.price}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </form>
      </div>
    </>
  )
}
