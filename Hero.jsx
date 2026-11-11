// Hero.jsx
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <p className="hero-small">
          EXPLORE THE WORLD WITH US
        </p>

        <h1>
          Your Journey,
          <br />
          <span>Your Beautiful Story.</span>
        </h1>

        <p className="hero-text">
          Discover breathtaking destinations, enjoy unique
          experiences and create unforgettable memories.
          Let us make your next holiday special.
        </p>

        <Link to="/destinations" className="hero-btn">
          Start Exploring <span>→</span>
        </Link>
      </div>

      <div className="hero-bottom">
        <span>TRAVEL · EXPLORE · ENJOY</span>
        <span>01 — 03</span>
      </div>

    </section>
  );
}

export default Hero;