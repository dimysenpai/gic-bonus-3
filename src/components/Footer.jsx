import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo/GIC_BONUS_LOGO.png";
import logoText from "../assets/imgs/logo/GIC_BONUS_TEXT.png";

function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/service">Services</Link>
        <Link to="/training">Formations</Link>
        <Link to="/about">A Propos</Link>
      </div>
      <div className="logoContent">
        <img className="logo" src={logo} alt="logo" />
        <img className="logoText" src={logoText} alt="logo" />
      </div>
      <div className="contact"></div>
    </div>
  );
}

export default Footer;
