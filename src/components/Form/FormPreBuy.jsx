import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import './Form.css'
import swal from 'sweetalert';

export const FormPreBuy = () => {

  const { cart, clearCart } = useCartContext([])

  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);

  const db = getFirestore()

  const ordersCollection = collection(db, 'orders');

  const handleSubmit = (e) => {

    e.preventDefault(); // Evitamos que el formulario se envié por si mismo.

    // Objeto ‘order’ con la información del comprador, los ítems y su total.
    const order = {
      buyer: {
        name: buyerName,
        phone: buyerPhone,
        email: buyerEmail
      },
      items: selectedItems,
      total: total
    };
    // Función para resetear el formulario luego de enviar
    const resetForm = () => {
      setBuyerName('');
      setBuyerPhone('');
      setBuyerEmail('');
      setSelectedItems([]);
      clearCart()
      setTotal(0);
    };

    // Método ‘addDoc’ para agregar un nuevo documento con los datos de la orden. 

    addDoc(ordersCollection, order)
      .then((docRef) => {
        swal("Your order was confirmed succesfully!Name", "You`ll receive an email with details soon.");
        resetForm();
      })
      .catch((e) => {
        console.log('Error al agregar el documento', e);
      });
  };

  // Función para manejar el seleccionado/deseleccionado de los checkbok
  const handleSelectItem = (item) => {
    // Comprobamos si el elemento seleccionado está o no en la lista de elementos.
    const isSelected = selectedItems.includes(item);

    // Si no está seleccionado, se agrega a la lista de elementos y se agrega su precio al total.
    if (!isSelected) {
      setSelectedItems([...selectedItems, item]);
      setTotal(total + item.price);
    } else {
      // Si el elemento ya está seleccionado, al deseleccionar se elimina de la lista y se resta su precio total al total (total).
      const updatedSelectedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
      setSelectedItems(updatedSelectedItems);
      setTotal(total - item.price);
    }
  };

  return (

    <>
      <div className="hero-products-checkout">
        <p className="hero-products-subtitle-checkout">CHECKOUT</p>
      </div>
      <div className='container-flex'>
        <form onSubmit={handleSubmit} className="form__container">
          <h2 className="title__h2-form">Hi! We need some information to continue with the purchase.</h2>

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
              {/* <button type="submit" value={handleSubmit} class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
              </button> */}
              <button type="submit" value="submit" className="btn btn-danger mb-4 form__btn rounded-0" data-toggle="modal" data-target="#exampleModal">Confirm Buy</button>
            </div>
          </div>
        </form>
        <div className="salvador-checkout">
          {cart.map((item) => {
            return (

              <div className='item-detail-buy'>
                <div className="bag-content-checkout">
                  <div className="shopping-bag-content">
                    <div className="shopping-bag-wrapper-checkout">
                      <img className="shopping-bag-img" src={item.image}></img>
                      <div className="baglist">
                        <div className="baglist-item-summary">
                          <div className="baglist-flex-details-checkout">
                            <h2 className="baglist-title">{item.title}</h2>
                          </div>
                          <p className="cart-product-detail-text">
                            style: #{item.id}
                          </p>
                          <p className="cart-product-detail-text">
                            Variation: {item.bagType}
                          </p>
                          <h5 className="cart-product-detail-price">
                            Price: ${item.price * item.quantity}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-4' key={item.id}>
                  <label>
                    <input type="checkbox" checked={selectedItems.some((selectedItem) => selectedItem.id === item.id)} onChange={() => handleSelectItem(item)} /> {item.title}
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}
