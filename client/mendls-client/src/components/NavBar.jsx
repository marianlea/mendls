import './NavBar.css'
import logo from '../assets/logo.png'
import basketIcon from '../assets/basket.png'
import { Link as LinkRouter } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';



export default function NavBar({ 
  setIsBasketVisible, 
  basket,
  location
}) {

  const [background, setBackground] = useState({backgroundColor: 'transparent'})
  const [footerIsVisible, setFooterIsVisible] = useState('hidden')

  function scrollToTop() {
    window.scrollTo({top:0,left:0, behavior: 'smooth'})
  }

  function handleBasketClick() {
    setIsBasketVisible(true)
  }

  useEffect(() => {
    const handleScroll = () => {
      if ((window.scrollY >= 539 && location.pathname === '/') ||     location.hash === '#shop'){
        setBackground(
          {
            backgroundColor: "#FFFAF0",
          } 
        )
        setFooterIsVisible('visible') 
      } else {
        setBackground(
          {
            backgroundColor: "transparent",
          }
          )
        setFooterIsVisible('hidden') 
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
      <nav className="nav-bar" style={background}>
        <LinkRouter to='/' onClick={scrollToTop}>
          <img className="logo" src={logo} alt="" />
        </LinkRouter>
        <div className='links'>
          <LinkRouter to='/' onClick={scrollToTop}className='link'>HOME</LinkRouter>
          <NavHashLink to='/#shop' className='link' visibility={footerIsVisible}>SHOP</NavHashLink>
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
