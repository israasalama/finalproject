import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/BookingForm.css'

function BookingForm({ availableTimes, dispatch }) {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
    seating: 'Indoor',
    specialRequests: ''
  })

  const [errors, setErrors] = useState({})

  function handleDateChange(e) {
    const date = e.target.value
    setFormData({ ...formData, date })
    dispatch({ type: 'UPDATE_TIMES', date })
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function validate() {
    const newErrors = {}
    if (!formData.date) newErrors.date = 'Please select a date'
    if (!formData.time) newErrors.time = 'Please select a time'
    if (!formData.occasion) newErrors.occasion = 'Please select an occasion'
    if (formData.guests < 1 || formData.guests > 10)
      newErrors.guests = 'Guests must be between 1 and 10'
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    navigate('/confirmed', { state: formData })
  }

  return (
    <form onSubmit={handleSubmit} noValidate>

      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleDateChange}
        required
      />
      {errors.date && <span role="alert">{errors.date}</span>}

      <label htmlFor="time">Time</label>
      <select
        id="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map(time => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      {errors.time && <span role="alert">{errors.time}</span>}

      <label htmlFor="guests">Number of guests</label>
      <select
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
      >
        {[1,2,3,4,5,6,7,8,9,10].map(num => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      {errors.guests && <span role="alert">{errors.guests}</span>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Engagement">Engagement</option>
        <option value="Other">Other</option>
      </select>
      {errors.occasion && <span role="alert">{errors.occasion}</span>}

      <fieldset>
        <legend>Seating preference</legend>
        <label>
          <input
            type="radio"
            name="seating"
            value="Indoor"
            checked={formData.seating === 'Indoor'}
            onChange={handleChange}
          />
          Indoor
        </label>
        <label>
          <input
            type="radio"
            name="seating"
            value="Outdoor"
            checked={formData.seating === 'Outdoor'}
            onChange={handleChange}
          />
          Outdoor
        </label>
      </fieldset>

      <label htmlFor="specialRequests">Special requests</label>
      <textarea
        id="specialRequests"
        name="specialRequests"
        value={formData.specialRequests}
        onChange={handleChange}
        placeholder="Any special requirements? (optional)"
      />

      <button type="submit">Find a Table →</button>

    </form>
  )
}

export default BookingForm