import footer_logo from "../Assets/logo_big.png";
import instragram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import Whatsapp_icon from "../Assets/Whatsapp_icon.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>shopper</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Product</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
        <li>page</li>
        <li>log</li>
        <li>new</li>
      </ul>
      <div className="footer-socail-icon">
        <div className="footer-icon-container">
          <img src={instragram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={Whatsapp_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pinterest_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          iste.
        </p>
      </div>
    </div>
  );
};

export default Footer;
