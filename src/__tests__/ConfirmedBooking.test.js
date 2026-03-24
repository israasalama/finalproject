import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ConfirmedBooking from '../ConfirmedBooking'

const mockBooking = {
  date: '2025-04-05',
  time: '7:00 PM',
  guests: 2,
  occasion: 'Anniversary',
  seating: 'Indoor'
}

const renderConfirmedBooking = () => {
  render(
    <BrowserRouter>
      <ConfirmedBooking />
    </BrowserRouter>
  )
}

describe('ConfirmedBooking', () => {

  test('renders confirmation heading', () => {
    renderConfirmedBooking()
    expect(screen.getByText('Booking Confirmed!')).toBeInTheDocument()
  })

  test('renders back to home button', () => {
    renderConfirmedBooking()
    expect(screen.getByText('Back to Home')).toBeInTheDocument()
  })

  test('renders order online button', () => {
    renderConfirmedBooking()
    expect(screen.getByText('Order Online')).toBeInTheDocument()
  })

})