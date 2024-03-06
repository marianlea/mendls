import { useState, useEffect } from 'react'
import './Checkout.css'
import { v1 as uuidv1 } from 'uuid';
import { loadStripe } from '@stripe/stripe-js'



export default function Checkout({ basket }) {

  const[formData, setFormData] = useState({})

  function handleFormChange(e) {
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  function handleSubmit(e) {
    e.preventDefault()
    localStorage.setItem('customer', JSON.stringify(formData))
  }

  async function handleCheckout() {
    const stripe = await loadStripe('pk_test_51OppwUJMehcHOqCV1mz7CJJ99LZcVSOW6YZyX5GAvm6XVzQfZNpDUpBGF30PeezQPTVUjAXe3NN1q6kPifL2U3uY00sJ4OQIce')
  
    const body = {
      products: basket,
      cartId: uuidv1()
    }
  
    const headers = {
      "Content-Type": "application/json"
    }
  
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })
  
    console.log(body);
  
    const session = await response.json()
  
    const result = stripe.redirectToCheckout({
      sessionId: session.id
    })
  
    if (result.error) {
      console.log(result.error);
    }
  }
  

  return (
    <section className="checkout">
      <form action="" onSubmit={handleSubmit}>
        <section>
          <h5>Personal Details</h5>
          <label htmlFor="">First Name</label>
          <input type="text" name='firstname' onChange={handleFormChange} required />
          <label htmlFor="">Last Name</label>
          <input type="text" name='lastname' onChange={handleFormChange} required />
          <label htmlFor="">Contact Number</label>
          <input type="number" name='phoneNumber' onChange={handleFormChange} size={10} required />
        </section>
        <section>
          <h5>Shipping Address</h5>
          <label htmlFor="">Deliver to</label>
          <input type="text" placeholder='Enter Location' name='delivery-address' onChange={handleFormChange} required />
          <label htmlFor="">Apartment, unit, suite, or floor #</label>
          <input type="text" name='unitNumber' onChange={handleFormChange} />
          <label htmlFor="">Street</label>
          <input type="text" name='street' onChange={handleFormChange} />
          <label htmlFor="">City</label>
          <input type="text" name='city' onChange={handleFormChange} required />
          <label htmlFor="">State / Province</label>
          <input type="text" name='stateOrProvince' onChange={handleFormChange} required />
          <label htmlFor="">Post code</label>
          <input type="text" name='postCode' onChange={handleFormChange} required />
          <label htmlFor="">Country / Region</label>
          <input type="text" name='countryOrRegion' onChange={handleFormChange} required />
        </section>
        <button onClick={handleCheckout}>continue</button>
      </form>
    </section>
  )
}