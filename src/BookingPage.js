import BookingForm from './BookingForm'
import './styles/BookingPage.css'

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <main>
      <section className="booking-page" aria-label="Reservations">
        <h1>Reserve a Table</h1>
        <p>
          Book your table at Little Lemon and enjoy the finest
          Mediterranean cuisine in the heart of Chicago.
        </p>

        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />

      </section>
    </main>
  )
}

export default BookingPage