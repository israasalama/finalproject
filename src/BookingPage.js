import BookingForm from './BookingForm'
import './styles/BookingPage.css'

function BookingPage() {
  return (
    <main>
      <section className='booking' aria-label="Reservations">
        <h1>Reserve a Table</h1>
        <p>
          Book your table at Little Lemon and enjoy the finest
          Mediterranean cuisine in the heart of Chicago.
        </p>
        <BookingForm />
      </section>
    </main>
  )
}

export default BookingPage