import Footer from '../components/Footer'
import './ContactPage.css'
import box from '../assets/box.png'

export default function ContactPage() {

  return (
    <section className="contact-page">
      <img src={box} alt="" />
      <div className='contact'>
        <p className='hours'>STORE HOURS 7AM TO 3PM</p>
        <p>
          <span class="material-symbols-outlined">
          storefront
          </span>
          Brucknerplatz, No. 12 Nebelsbad
        </p>
        <p>
          <span class="material-symbols-outlined">
          ring_volume
          </span>
          01.42.22.87.50
        </p>
        <p>
          <span class="material-symbols-outlined">
          drafts
          </span>
          contact@mendls.co
        </p>
      </div>
      <Footer color='#FFFAF0' image='none' visible='visible' />
    </section>
  )
}