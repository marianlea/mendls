import delivery from '../assets/delivery.gif'
import './PaymentSuccess.css'
import Footer from '../components/Footer'

export default function PaymentSuccess({ resetBasket }) {

  resetBasket([])
  return (
    <section className='payment'>
      <div className="message">
        <img src={delivery} alt="" />
        <p>Thank you for your order!</p>
        <p>Your pastries are on the way.</p>
      </div>
      <Footer color='#FFFAF0' image='none' />
    </section>
  )
}