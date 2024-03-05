import './NavBar.css'
import logo from './assets/logo.png'
import basketIcon from './assets/basket.png'

export default function NavBar() {

  return (
    <nav className="nav-bar">
      <img className="logo" src={logo} alt="" />
      <div className='links'>
        <h3>HOME</h3>
        <h3>SHOP</h3>
        <h3>ABOUT</h3>
        <img className="basket-icon" src={basketIcon} alt="" />
      </div>
    </nav>
  ) 
}