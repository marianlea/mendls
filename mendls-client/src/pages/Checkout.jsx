import { useState, useEffect } from 'react'
import './Checkout.css'
import { v1 as uuidv1 } from 'uuid';
import { loadStripe } from '@stripe/stripe-js'
import Footer from '../components/Footer';



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
  
    const response = await fetch('https://mendls-server.vercel.app/api/create-checkout-session', {
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
      <div className="checkout-form">
        <form action="" onSubmit={handleSubmit}>
          <section className='personal-details'>
            <h5>Personal Details</h5>
            <div className='name'>
              <label htmlFor="">First Name</label>
              <input type="text" name='firstname' onChange={handleFormChange} required />
              <label htmlFor="">Last Name</label>
              <input type="text" name='lastname' onChange={handleFormChange} required />
            </div>
            <div>
              <label htmlFor="">Contact No.</label>
              <input type="text" name='phoneNumber' onChange={handleFormChange} required />
              <label htmlFor="">Email</label>
              <input type="email" name='email' onChange={handleFormChange} required />
            </div>
          </section>
          <section className='shipping'>
            <h5>Shipping Address</h5>
            {/* <section className="deliver-to">
            <label htmlFor="">Deliver to</label>
              <input type="text" placeholder='Enter Location' name='delivery-address' onChange={handleFormChange} required />
            </section> */}
            <div className='street'>
              <label htmlFor="">Unit </label>
              <input type="text" name='unitNumber' onChange={handleFormChange} />
              <label htmlFor="">Street</label>
              <input type="text" name='street' onChange={handleFormChange} />
            </div>
            <div className="city">
              <label htmlFor="">City</label>
              <input type="text" name='city' onChange={handleFormChange} required />
              <label htmlFor="">State</label>
              <input type="text" name='stateOrProvince' onChange={handleFormChange} required />
            </div>
            <div className="region">
              <label htmlFor="">Post code</label>
              <input type="text" name='postCode' onChange={handleFormChange} required />
              <label htmlFor="">Country</label>
              <input type="text" name='countryOrRegion' onChange={handleFormChange} required />
            </div>
          </section>
          <div className='btn'>
            <button onClick={handleCheckout} className='continue-btn'>continue to payment</button>
          </div>
        </form>
      </div>
      <Footer className="footer" color='#FFFAF0' image='none' visible='visible' />
    </section>
  )
}