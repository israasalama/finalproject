import './styles/Testimonials.css'

function TestimonialCard({ name, rating, review, image }) {
  return (
    <article>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p aria-label={`Rating: ${rating} out of 5`}>
        {"★".repeat(rating)}{"☆".repeat(5 - rating)}
      </p>
      <blockquote>
        <p>{review}</p>
      </blockquote>
    </article>
  )
}

const testimonials = [
  {
    id: 1,
    name: "Hannah",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit officia consequat duis enim velit mollit.",
    image: "https://placehold.co/80x80"
  },
  {
    id: 2,
    name: "James",
    rating: 4,
    review: "Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco.",
    image: "https://placehold.co/80x80"
  },
  {
    id: 3,
    name: "Harris",
    rating: 5,
    review: "Est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit ullamco.",
    image: "https://placehold.co/80x80"
  },
  {
    id: 4,
    name: "Sandra",
    rating: 4,
    review: "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    image: "https://placehold.co/80x80"
  }
]

function Testimonials() {
  return (
    <section className="testimonials" aria-label="Testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            rating={testimonial.rating}
            review={testimonial.review}
            image={testimonial.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonials