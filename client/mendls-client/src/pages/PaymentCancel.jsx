import Footer from '../components/Footer'
import './PaymentSuccess.css'


export default function PaymentCancel({ }) {

  return (
    <section className='payment'>
      <div className="message">
        <p>Sorry, your payment was declined.</p>
        <p>Please try again.</p>
      </div>
      <Footer color='#FFFAF0' image='none' />
    </section>
  )
}