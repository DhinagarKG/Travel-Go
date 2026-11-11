// Header.jsx
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <Link to="/" className="logo">
        <span className="logo-icon">✦</span>
        TRAVEL<span>GO.</span>
      </Link>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="header-buttons">
        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/register" className="register-btn">
          Register
        </Link>
      </div>

    </header>
  );
}

export default Header;