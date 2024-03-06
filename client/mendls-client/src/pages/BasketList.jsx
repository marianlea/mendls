
import { v1 as uuidv1 } from 'uuid';
import PastryItem from "./PastryItem";
import CancelIcon from '@mui/icons-material/Cancel';
import './BasketList.css'
import { loadStripe } from '@stripe/stripe-js'
import { Link as LinkRouter } from 'react-router-dom';

export default function BasketList({ basket, onBasketChange, setIsBasketVisible, removeItemFromBasket }) {

  function handleQuantityChange(e, pastry) {
    onBasketChange({...pastry, quantity: e.target.value})
  }

  function handleBasketClose() {
    setIsBasketVisible(false)
  }

  // async function handleCheckout() {
  //   const stripe = await loadStripe('pk_test_51OppwUJMehcHOqCV1mz7CJJ99LZcVSOW6YZyX5GAvm6XVzQfZNpDUpBGF30PeezQPTVUjAXe3NN1q6kPifL2U3uY00sJ4OQIce')

  //   const body = {
  //     products: basket,
  //     cartId: uuidv1()
  //   }

  //   const headers = {
  //     "Content-Type": "application/json"
  //   }

  //   const response = await fetch('/api/create-checkout-session', {
  //     method: 'POST',
  //     headers: headers,
  //     body: JSON.stringify(body)
  //   })

  //   console.log(body);

  //   const session = await response.json()

  //   const result = stripe.redirectToCheckout({
  //     sessionId: session.id
  //   })

  //   if (result.error) {
  //     console.log(result.error);
  //   }
  // }
  return (
    <div className="basket-list">
      <div onClick={handleBasketClose} className="close-icon-wrapper">
      <CancelIcon />
      </div>
      <h5 className="your-basket">YOUR BASKET</h5>
      <section className="headers">
        <h5 className="header-item">ITEM</h5>
        <h5 className="header-price">PRICE</h5>
        <h5 className="header-qty">QTY</h5>
        <h5 className="header-total">TOTAL</h5>
      </section>
      <ul>
          {basket.map(pastry =>{
              return !!pastry.quantity && <li key={`${pastry.id}-basket`} className="basket-item" >
                  <PastryItem  className="item" pastry={pastry} />
                  <section className="form">
                    <input
                        className="quantity"
                        type="number"
                        defaultValue={basket.find(item => item.id === pastry.id)?.quantity || null}
                        onChange={(e) => handleQuantityChange(e, pastry)}
                        name="quantity"
                        min="1"
                    />
                    <span className="total">$ {(pastry.quantity * pastry.price).toFixed(2)}</span>
                    <button className="remove-btn" onClick={() => removeItemFromBasket(pastry)}>remove</button>
                  </section>
              </li>
          })}
      </ul>
      <section className="basket-total">
        <h5>TOTAL</h5>
        <span className="overall-total total-quantity">
          {basket
                .map(pastry => Number(pastry.quantity))
                .reduce((totalQuantity, quantity) => totalQuantity + quantity, 0)
          }
        </span>
        <span className="overall-total total-amount">$
          {basket
                .map(pastry => Number(pastry.quantity) * Number(pastry.price))
                .reduce((totalQuantity, quantity) => totalQuantity + quantity, 0)
                .toFixed(2)
          }
        </span>
      </section>
      <div className="checkout">
        <p>* shipping fee calculated at checkout</p>
        <LinkRouter to='/checkout' className="checkout-btn" onClick={handleBasketClose}>checkout</LinkRouter>
      </div>
    </div>
  )
}