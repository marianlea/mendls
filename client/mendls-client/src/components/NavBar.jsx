import './NavBar.css'
import logo from '../assets/logo.png'
import noise from '../assets/noise.png'
import basketIcon from '../assets/basket.png'
import { Link as LinkRouter } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';



export default function NavBar({ 
  setIsBasketVisible, 
  basket,
  location
}) {

  function scrollToTop() {
    window.scrollTo({top:0,left:0, behavior: 'smooth'})
  }

  function handleBasketClick() {
    setIsBasketVisible(true)
  }

  let background 
  location.hash === '#shop'
  ? background = {
      color: "#FFFAF0",
    }
  : background = {
      color: "transparent",
    }

  return (
      <nav className="nav-bar" style={{backgroundColor:background.color }}>
        <LinkRouter to='/' onClick={scrollToTop}>
          <img className="logo" src={logo} alt="" />
        </LinkRouter>
        <div className='links'>
          <LinkRouter to='/' onClick={scrollToTop}className='link'>HOME</LinkRouter>
          <NavHashLink to='/#shop' className='link'>SHOP</NavHashLink>
          <LinkRouter to='/about' className='link'>ABOUT</LinkRouter>
        <div>
        <div style={{position: 'relative'}}>
          <img className="basket-icon link" src={basketIcon} onClick={handleBasketClick} alt="" />
          {!!basket.length && 
            <p className="quantity">
              {basket
                .map(pastry => Number(pastry.quantity))
                .reduce((totalQuantity , quantity) => totalQuantity + quantity, 0)
              }
            </p> 
          }
        </div>
        </div>  
        </div>
      </nav>
  ) 
}
