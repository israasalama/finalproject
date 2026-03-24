import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import BookingForm from '../BookingForm'

const renderBookingForm = () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  )
}

describe('BookingForm', () => {

  test('renders the booking form', () => {
    renderBookingForm()
    expect(screen.getByText('Find a Table →')).toBeInTheDocument()
  })

  test('renders all form fields', () => {
    renderBookingForm()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
    expect(screen.getByLabelText('Number of guests')).toBeInTheDocument()
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument()
  })

  test('shows error when form is submitted empty', () => {
    renderBookingForm()
    fireEvent.click(screen.getByText('Find a Table →'))
    expect(screen.getByText('Please select a date')).toBeInTheDocument()
    expect(screen.getByText('Please select a time')).toBeInTheDocument()
  })

  test('updates available times when date is changed', () => {
    renderBookingForm()
    const dateInput = screen.getByLabelText('Date')
    fireEvent.change(dateInput, { target: { value: '2025-04-05' } })
    const timeSelect = screen.getByLabelText('Time')
    expect(timeSelect.options.length).toBeGreaterThan(1)
  })

  test('shows weekend times when a Saturday is selected', () => {
    renderBookingForm()
    const dateInput = screen.getByLabelText('Date')
    fireEvent.change(dateInput, { target: { value: '2025-04-05' } })
    const timeSelect = screen.getByLabelText('Time')
    const options = Array.from(timeSelect.options).map(o => o.value)
    expect(options).toContain('12:00 PM')
  })

  test('shows weekday times when a Monday is selected', () => {
    renderBookingForm()
    const dateInput = screen.getByLabelText('Date')
    fireEvent.change(dateInput, { target: { value: '2025-04-07' } })
    const timeSelect = screen.getByLabelText('Time')
    const options = Array.from(timeSelect.options).map(o => o.value)
    expect(options).not.toContain('12:00 PM')
    expect(options).toContain('5:00 PM')
  })

})