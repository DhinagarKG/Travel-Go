// NotFound.jsx
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">

      <div className="not-found-content">
        <p className="small-heading">
          LOOKS LIKE YOU ARE LOST
        </p>

        <h1>404</h1>

        <h2>Oops! Page Not Found.</h2>

        <p>
          Sorry, we couldn't find the page you are looking for.
          Let's get you back to exploring the world.
        </p>

        <Link to="/" className="hero-btn">
          ← Back to Home
        </Link>
      </div>

    </section>
  );
}

export default NotFound;