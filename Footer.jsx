// Footer.jsx
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-about">
          <Link to="/" className="footer-logo">
            ✦ TRAVEL<span>GO.</span>
          </Link>

          <p>
            Discover amazing destinations, experience new
            cultures and make every journey unforgettable.
          </p>

          <Link to="/about" className="footer-link">
            Discover Our Story →
          </Link>
        </div>

        <div className="footer-column">
          <h4>EXPLORE</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-column">
          <h4>DESTINATIONS</h4>
          <Link to="/destinations">Popular Places</Link>
          <Link to="/packages">Travel Packages</Link>
          <Link to="/deals">Special Offers</Link>
          <Link to="/collections">Collections</Link>
        </div>

        <div className="footer-column">
          <h4>CONTACT</h4>
          <p>hello@travelgo.com</p>
          <p>+91 98765 43210</p>
          <p>India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 TravelGo. All rights reserved.</p>
        <p>Privacy Policy · Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;