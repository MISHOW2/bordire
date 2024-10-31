import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer(){
  return(

    <footer>
     <div className="footer-flex">
      <div className="Services">
        <p>Services</p>
        <ul>
          <li>IT Hardware</li>
          <li>Network Solutions</li>
          <li>Security Systems</li>
          <li>Automation Solutions</li>
          <li>Point of Sale Solutions</li>
          <li>Data Center Management</li>
          <li>Civil and Electrical Services</li>
        </ul>
        

    </div>
    <div className="footer-nav">
      <p>Navigation</p>
      <ul>
      <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/whyUs">Why Choose Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
    <div className="contact">
      <p>Contact Information</p>
      <ul>
        <li><p><span>Adress:</span>  1025 Ingonyama Street, Diepsloot Ext2, Randburg, Gauteng, South Africa 2125</p>
        
        </li>
        <li><p><span>Phone:</span>  071 404 3743</p>
        
        </li>
        <li><p><span>Email:</span>   info@bodire.co.za</p>
        </li>
        
      </ul>
    </div>
     </div>

    </footer>
  );
}