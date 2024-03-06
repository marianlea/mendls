import delivery from '../assets/delivery.gif'
import './PaymentSuccess.css'

export default function PaymentSuccess() {


  return (
    <section className='payment-success'>
      <p>Thank you for your order!</p>
      <p>Your pastries are on the way.</p>
      <img src={delivery} alt="" />
    </section>
  )
}