import { Link } from "react-router-dom";
import './Footer.css'

export default function Footer({ color, image, visibility }) {

  return (
    <section 
      className="footer" 
      style={{
        backgroundColor:color, 
        backgroundImage:`url(${image})`,
        visibility:{visibility}
      }}>
      <Link to='/' className="link">HOME</Link>
      <Link to='/contact' className="link">CONTACT US</Link>
    </section>
  )
}