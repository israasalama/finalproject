import { useLocation, useNavigate } from 'react-router-dom'
import './styles/ConfirmedBooking.css'

function ConfirmedBooking() {
  const location = useLocation()
  const navigate = useNavigate()
  const booking = location.state

  return (
    <main>
      <section className='confirmed' aria-label="Booking Confirmed">

        <span aria-hidden="true">✓</span>
        <h1>Booking Confirmed!</h1>
        <p>
          Thank you for your reservation. We look forward
          to seeing you at Little Lemon, Chicago!
        </p>

        <article aria-label="Booking summary">
          <h2>Booking Summary</h2>

          <dl>
            <dt>Date</dt>
            <dd>{booking?.date}</dd>

            <dt>Time</dt>
            <dd>{booking?.time}</dd>

            <dt>Number of guests</dt>
            <dd>{booking?.guests}</dd>

            <dt>Occasion</dt>
            <dd>{booking?.occasion}</dd>

            <dt>Seating preference</dt>
            <dd>{booking?.seating}</dd>
          </dl>
        </article>

        <p>
          A confirmation has been sent to your email address.
          If you need to make changes to your reservation,
          please contact us at least 24 hours in advance.
        </p>

        <address>
          <p>Phone: (312) 555-0199</p>
          <p>Email: reservations@littlelemon.com</p>
        </address>

        <nav aria-label="Post booking actions">
          <button onClick={() => navigate('/')}>
            Back to Home
          </button>
          <button onClick={() => navigate('/order')}>
            Order Online
          </button>
        </nav>

      </section>
    </main>
  )
}

export default ConfirmedBooking