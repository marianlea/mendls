import './NavBar.css'
import logo from '../assets/logo.png'
import basketIcon from '../assets/basket.png'
import { Link as LinkRouter } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';



export default function NavBar({ 
  setIsBasketVisible, 
  basket,
}) {

  function scrollToTop() {
    window.scrollTo({top:0,left:0, behavior: 'smooth'})
  }

  function handleBasketClick() {
    setIsBasketVisible(true)
  }

  return (
      <nav className="nav-bar">
        <LinkRouter to='/' onClick={scrollToTop}className='link'>
          <img className="logo" src={logo} alt="" />
        </LinkRouter>
        <div className='links'>
          <LinkRouter to='/' onClick={scrollToTop}className='link'>HOME</LinkRouter>
          <NavHashLink to='/#shop' className='link'>SHOP</NavHashLink>
          <LinkRouter to='/about' className='link'>ABOUT</LinkRouter>
        <div>
        <div style={{position: 'relative'}}>
          <img className="basket-icon" src={basketIcon} onClick={handleBasketClick} alt="" />
          {!!basket.length && 
            <p style={{height:15, width: 15, borderRadius: 7.5, backgroundColor: '#D20F3E', color: '#fff', fontSize: 7, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: -6, right: -7}}>
              {basket.length}
            </p>
          }
        </div>
        </div>  
        </div>
      </nav>
  ) 
}
