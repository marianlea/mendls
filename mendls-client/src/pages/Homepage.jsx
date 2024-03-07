import {useEffect, useState} from 'react'
import './Homepage.css'
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
import Footer from '../components/Footer'

export default function Homepage() {

  const [slideClass, setSlideClass] = useState({
    slideInOne: 'slide-in1',
    slideInTwo: 'slide-in2',
    slideInThree: 'slide-in3',
    slideOutOne: 'slide-out1',
    slideOutTwo: 'slide-out2',
    slideOutThree: 'slide-out3',
  })
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 539){
        setSlideClass({
          slideInOne: '',
          slideInTwo: '',
          slideInThree: '',
          slideOutOne: '',
          slideOutTwo: '',
          slideOutThree: '',
        })
      } else {
        setSlideClass({
          slideInOne: 'slide-in1',
          slideInTwo: 'slide-in2',
          slideInThree: 'slide-in3',
          slideOutOne: 'slide-out1',
          slideOutTwo: 'slide-out2',
          slideOutThree: 'slide-out3',
        })
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
      
  }, [])
  return (
    <div className="homepage" id="homepage">
      <div className='left'>
        <img className={`whiskCream ${slideClass.slideInOne}`}   src={whiskCream} alt="" />
        <img className={`spatulaAndBowl ${slideClass.slideInThree}`} src={spatulaAndBowl} alt="" />
        <img className={`spoon ${slideClass.slideInOne}`} src={spoon} alt="" />
        <img className={`leftPin ${slideClass.slideInTwo}`} src={leftPin} alt="" />
      </div>
      <div className='center'>
        <img className='main-logo' src={logo} alt="" />
        <p className='store-hours'>STORE HOURS 7AM TO 3PM</p>
        {/* <NavHashLink  to='/#shop'  className='shop-btn'>SHOP</NavHashLink  > */}
      </div>
      <div className='right'>
        <img className={`mitten ${slideClass.slideOutOne}`} src={mitten} alt="" />
        <img className={`box ${slideClass.slideOutTwo}`} src={box} alt="" />
        <img className={`whiskPin ${slideClass.slideOutThree}`} src={whiskAndPin} alt="" />
        <img className={`bowl ${slideClass.slideOutTwo}`} src={bowl} alt="" />
      </div>
    </div>
  )
}