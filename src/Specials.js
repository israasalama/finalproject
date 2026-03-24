import greekSalad from './assets/images/greek-salad.jpg'
import bruschetta from './assets/images/bruschetta.svg'
import lemonDessert from './assets/images/lemon-dessert.jpg'
import './Specials.css'
const specials = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: greekSalad,
    alt: "Greek salad with fresh vegetables and feta cheese"
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: bruschetta,
    alt: "Bruschetta with tomatoes and basil on grilled bread"
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.00",
    description: "This comes straight from a local farm that's organic. Every ingredient has been sourced locally as a community service and can be enjoyed.",
    image: lemonDessert,
    alt: "Fresh lemon dessert from locally sourced ingredients"
  }
]

function SpecialCard({ name, price, description, image, alt }) {
  return (
    <article>
      <img src={image} alt={alt} />
      <section>
        <h3>{name}</h3>
        <span>{price}</span>
        <p>{description}</p>
        <a href="/order">Order a delivery →</a>
      </section>
    </article>
  )
}

function Specials() {
  return (
    <section className='specials' aria-label="Specials">
      <header>
        <h2>This week's specials!</h2>
        <a href="/menu">
          <button>Online Menu</button>
        </a>
      </header>
      {specials.map(special => (
        <SpecialCard
          key={special.id}
          name={special.name}
          price={special.price}
          description={special.description}
          image={special.image}
          alt={special.alt}
        />
      ))}
    </section>
  )
}

export default Specials