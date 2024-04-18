import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer({ color, image, visibility, shopInactive }) {
  return (
    <section
      className="footer"
      style={{
        backgroundColor: color,
        backgroundImage: `url(${image})`,
        visibility: { visibility },
      }}
    >
      <Link to="/" className="link" onClick={shopInactive}>
        HOME
      </Link>
      <Link to="/contact" className="link" onClick={shopInactive}>
        CONTACT US
      </Link>
    </section>
  );
}
