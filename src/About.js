import restaurantPhoto from './assets/images/restaurant.jpg'
import chefPhoto from './assets/images/chef.jpg'
import './styles/About.css'

function About() {
  return (
    <section className='about' aria-label="About Little Lemon">

      <article>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist. Located in
          the heart of Chicago, Little Lemon has been bringing fresh,
          locally sourced flavors to the table since 2010.
        </p>
        <p>
          Our owners Adrian and Mario have combined their Italian and
          Greek heritage to create a menu that feels both familiar and
          exciting. Every dish is prepared with care, using ingredients
          from local farms and suppliers we trust.
        </p>
      </article>

      <figure>
        <img src={restaurantPhoto} alt="Inside Little Lemon restaurant" />
      </figure>

      <figure>
        <img src={chefPhoto} alt="Chef at Little Lemon restaurant" />
      </figure>

    </section>
  )
}

export default About
