// Sections.jsx
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    image: "photo-1537996194471-e657df975ab4"
  },
  {
    name: "Santorini",
    country: "Greece",
    image: "photo-1533105079780-92b9be482077"
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    image: "photo-1514282401047-d79a71a590e8"
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    image: "photo-1531366936337-7c912a4589a7"
  },
  {
    name: "Paris",
    country: "France",
    image: "photo-1502602898657-3e91760cbb34"
  },
  {
    name: "Thailand",
    country: "Asia",
    image: "photo-1528181304800-259b08848526"
  }
];

const packages = [
  {
    name: "Tropical Island Escape",
    place: "Maldives",
    price: "₹49,999",
    image: "photo-1514282401047-d79a71a590e8"
  },
  {
    name: "Mountain Adventure",
    place: "Switzerland",
    price: "₹79,999",
    image: "photo-1531366936337-7c912a4589a7"
  },
  {
    name: "Romantic City Tour",
    place: "Paris",
    price: "₹39,999",
    image: "photo-1502602898657-3e91760cbb34"
  },
  {
    name: "Island Holiday",
    place: "Bali",
    price: "₹59,999",
    image: "photo-1537996194471-e657df975ab4"
  }
];

function Destinations() {
  return (
    <section className="section destinations">

      <div className="section-heading">
        <div>
          <p className="small-heading">FIND YOUR NEXT DESTINATION</p>
          <h2>Places worth<br />travelling for.</h2>
        </div>

        <Link to="/destinations" className="text-link">
          Explore All Places →
        </Link>
      </div>

      <div className="destination-grid">
        {destinations.map((item) => (
          <Link
            to="/destinations"
            className="destination-card"
            key={item.name}
          >
            <img
              src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=600&q=80`}
              alt={item.name}
            />

            <h3>{item.name}</h3>
            <p>{item.country}</p>
          </Link>
        ))}
      </div>

    </section>
  );
}

function Deals() {
  return (
    <section className="deals-section">

      <div className="deals-content">
        <p className="small-heading">SPECIAL TRAVEL OFFERS</p>

        <h2>
          More travel.
          <br />
          More memories.
        </h2>

        <p>
          Find amazing holiday packages and explore
          beautiful places without spending too much.
        </p>

        <Link to="/deals" className="light-btn">
          View Special Offers →
        </Link>
      </div>

      <div className="deals-image">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
          alt="Beautiful tropical beach"
        />

        <div className="discount-circle">
          <small>SPECIAL OFFER</small>
          <strong>30%</strong>
          <small>OFF</small>
        </div>
      </div>

    </section>
  );
}

function Packages() {
  return (
    <section className="section packages">

      <div className="center-heading">
        <p className="small-heading">OUR TOP PICKS</p>
        <h2>Popular Travel Packages</h2>
        <p>
          Choose your favourite destination and start your adventure.
        </p>
      </div>

      <div className="package-grid">
        {packages.map((item) => (
          <Link
            to="/packages"
            className="package-card"
            key={item.name}
          >
            <div className="package-image">
              <img
                src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=700&q=80`}
                alt={item.name}
              />

              <span className="package-tag">POPULAR</span>
            </div>

            <div className="package-info">
              <p>{item.place}</p>
              <h3>{item.name}</h3>

              <div className="package-bottom">
                <span>★★★★★</span>
                <strong>{item.price}</strong>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}

function Collections() {
  return (
    <section className="section collections">

      <div className="collection-heading">
        <div>
          <p className="small-heading">TRAVEL YOUR WAY</p>
          <h2>
            Find your kind
            <br />
            <i>of adventure.</i>
          </h2>
        </div>

        <div className="collection-description">
          <p>
            Whether you love relaxing on beaches, exploring
            mountains or discovering cities, there is a perfect
            journey waiting for you.
          </p>

          <Link to="/collections" className="text-link">
            View Collections →
          </Link>
        </div>
      </div>

      <div className="collection-grid">

        <Link
          to="/collections"
          className="collection-card collection-large"
        >
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
            alt="Mountain adventure"
          />

          <div className="collection-overlay">
            <small>01 · ADVENTURE</small>
            <h3>Mountain Escape</h3>
          </div>
        </Link>

        <Link to="/collections" className="collection-card">
          <img
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=85"
            alt="Beach holiday"
          />

          <div className="collection-overlay">
            <small>02 · RELAXATION</small>
            <h3>Beach Holidays</h3>
          </div>
        </Link>

        <Link to="/collections" className="collection-card">
          <img
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=85"
            alt="City holiday"
          />

          <div className="collection-overlay">
            <small>03 · EXPLORATION</small>
            <h3>City Adventures</h3>
          </div>
        </Link>

      </div>

    </section>
  );
}

function Reviews() {
  return (
    <section className="reviews-section">

      <div className="reviews-inner">
        <p className="small-heading">TRAVELER EXPERIENCES</p>

        <h2>
          Real journeys.
          <br />
          <i>Beautiful memories.</i>
        </h2>

        <div className="review-card">
          <div className="review-stars">★★★★★</div>

          <p className="review-quote">
            "TravelGo made our holiday simple and memorable.
            Everything was well organised, and we enjoyed
            every moment of our trip. Definitely travelling
            with them again!"
          </p>

          <div className="review-person">
            <div className="review-avatar">A</div>

            <div>
              <h4>Arun Kumar</h4>
              <p>Verified Traveler</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

function Newsletter() {
  function handleSubscribe(event) {
    event.preventDefault();
    alert("Thank you for joining the TravelGo community!");
  }

  return (
    <section className="newsletter">

      <p className="small-heading">TRAVEL INSPIRATION</p>

      <h2>
        Your next adventure
        <br />
        <i>starts here.</i>
      </h2>

      <p>
        Subscribe to receive travel inspiration, destination
        guides and our latest holiday offers.
      </p>

      <form className="newsletter-form" onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email address"
          required
        />

        <button type="submit">→</button>
      </form>

      <small>✦ Travel inspiration, straight to your inbox.</small>

    </section>
  );
}

function Sections() {
  return (
    <>
      <Destinations />
      <Deals />
      <Packages />
      <Collections />
      <Reviews />
      <Newsletter />
    </>
  );
}

export default Sections;