import heroImage from './assets/images/hero-image.jpg'
import './styles/Hero.css'

function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <article>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a
          modern twist.
        </p>
        <a href="/reservations">
          <button>Reserve a Table</button>
        </a>
      </article>
      <div className="hero-image-wrapper">
        <img src={heroImage} alt="Mediterranean dishes at Little Lemon" />
      </div>
    </section>
  )
}

export default Hero