import Footer from '../components/Footer'
import './About.css'

export default function About() {


  return (
    <div className="about" id="about">
      <article className='staff'>
        <div className='herr-mendl photo'>
        </div>
        <div className='description'>
          <h3>Herr Mendl: The Master Confectioner</h3>
          <p>Herr Mendl is celebrated for his unparalled skill in crafting exquisite confections. With an eye for detail and a passion for perfection, he brings a touch of elegance and sophistication to every creation. At our online shop, we honor Herr Mendl's legacy by offering a curated selection of his finest delicacies, ensuring that his timeless creations continue to delight connoisseurs of fine desserts worldwide.</p>
        </div>
      </article>
      <article className='staff'>
        <div className='agatha photo'>
        </div>
        <div className='description'>
          <h3>Agatha: The Heart of Mendl's Confections</h3>
          <p>Agatha, with her gentle demeanor and unwavering dedication, is the soul behind Mendl's Confections. As a talented baker and apprentice to Herr Mendl, she imbues each pastry with warmth and love, elevating them beyond mere desserts to cherished works of art. Inspired by her creativity and passion, our online shop offers a selection of pastries crafted in Agatha's spirit, each one a testament to her talent and the legacy she continues to inspire.</p>
        </div>
      </article>
      <Footer color='#FFFAF0' image='none' visible='visible' />
    </div>
  )
}
