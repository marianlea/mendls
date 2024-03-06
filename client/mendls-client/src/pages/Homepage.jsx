import {useEffect} from 'react'
import './Homepage.css'
import { Link as ScrollLink } from 'react-scroll'
import logo from '../assets/logo-large.png'
import whiskCream from '../assets/whiskCream.png'
import bowl from '../assets/bowl.png'
import spoon from '../assets/spoons.png'
import spatulaAndBowl from '../assets/spatulaBowl.png'
import leftPin from '../assets/leftPin.png'
import mitten from '../assets/mitten.png'
import whiskAndPin from '../assets/whiskAndPin.png';
import box from '../assets/box.png'
import { NavHashLink } from 'react-router-hash-link';

export default function Homepage() {

  return (
    <div className="homepage" id="homepage">
      <div className='left'>
        <img className='whiskCream slide-in1' src={whiskCream} alt="" />
        <img className='spatulaAndBowl slide-in3' src={spatulaAndBowl} alt="" />
        <img className='spoon slide-in1' src={spoon} alt="" />
        <img className='leftPin slide-in2' src={leftPin} alt="" />
      </div>
      <div className='center'>
        <img className='main-logo' src={logo} alt="" />
        <NavHashLink  to='/#shop'  className='shop-btn'>SHOP</NavHashLink  >
      </div>
      <div className='right'>
        <img className='mitten slide-out1' src={mitten} alt="" />
        <img className='box slide-out2' src={box} alt="" />
        <img className='whiskPin slide-out3' src={whiskAndPin} alt="" />
        <img className='bowl slide-out2' src={bowl} alt="" />
      </div>
    </div>
  )
}