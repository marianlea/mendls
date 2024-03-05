import './Homepage.css'
import logo from './assets/logo-large.png'
import whiskCream from './assets/whiskCream.png'
import bowl from './assets/bowl.png'
import spoon from './assets/spoons.png'
import spatulaAndBowl from './assets/spatulaBowl.png'
import leftPin from './assets/leftPin.png'
import mitten from './assets/mitten.png'
import whiskAndPin from './assets/whiskAndPin.png'

export default function Homepage() {


  return (
    <section className="homepage">
      <div className='left'>
        <img className='whiskCream' src={whiskCream} alt="" />
        <img className='spatulaAndBowl' src={spatulaAndBowl} alt="" />
        <img className='spoon' src={spoon} alt="" />
        <img className='leftPin' src={leftPin} alt="" />
      </div>
      <div className='center'>
        <img className='main-logo' src={logo} alt="" />
        <button className='shop-btn'>SHOP</button>
        <h5 className='arrow-down'>⌄</h5>
      </div>
      <div className='right'>
        <img className='mitten' src={mitten} alt="" />
        <img className='spoonRight' src={spoon} alt="" />
        <img className='whiskPin' src={whiskAndPin} alt="" />
        <img className='bowl' src={bowl} alt="" />
      </div>
    </section>
  )
}