import { useReducer } from 'react'
import Hero from './Hero'
import Specials from './Specials'
import Testimonials from './Testimonials'
import About from './About'

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

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  )
}

export default Main