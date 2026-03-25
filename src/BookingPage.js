import { useReducer } from 'react'
import BookingForm from './BookingForm'
import './styles/BookingPage.css'

const weekdayTimes = [
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"
]

const weekendTimes = [
  "12:00 PM", "1:00 PM", "2:00 PM", "5:00 PM",
  "6:00 PM", "7:00 PM", "7:30 PM", "8:00 PM", "9:00 PM"
]

function initializeTimes() {
  return weekdayTimes
}

function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const day = new Date(action.date).getDay()
      return (day === 0 || day === 6) ? weekendTimes : weekdayTimes
    default:
      return state
  }
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

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
        />
      </section>
    </main>
  )
}

export default BookingPage