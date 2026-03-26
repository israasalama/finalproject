import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import BookingForm from '../BookingForm'

const availableTimes = ["5:00 PM", "6:00 PM", "7:00 PM"]
const dispatch = jest.fn()

const renderBookingForm = () => {
  render(
    <BrowserRouter>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </BrowserRouter>
  )
}

describe('BookingForm', () => {

  test('renders the Find a Table button', () => {
    renderBookingForm()
    expect(screen.getByText('Find a Table →')).toBeInTheDocument()
  })

  test('renders the Date label', () => {
    renderBookingForm()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
  })

  test('renders the Time label', () => {
    renderBookingForm()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
  })

  test('renders the Number of guests label', () => {
    renderBookingForm()
    expect(screen.getByLabelText('Number of guests')).toBeInTheDocument()
  })

  test('renders the Occasion label', () => {
    renderBookingForm()
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument()
  })

  test('renders the Seating preference legend', () => {
    renderBookingForm()
    expect(screen.getByText('Seating preference')).toBeInTheDocument()
  })

  test('shows error when form submitted empty', () => {
    renderBookingForm()
    fireEvent.click(screen.getByText('Find a Table →'))
    expect(screen.getByText('Please select a date')).toBeInTheDocument()
    expect(screen.getByText('Please select a time')).toBeInTheDocument()
  })

  test('dispatches UPDATE_TIMES when date is changed', () => {
    renderBookingForm()
    const dateInput = screen.getByLabelText('Date')
    fireEvent.change(dateInput, { target: { value: '2025-04-05' } })
    expect(dispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      payload: '2025-04-05'
    })
  })

})