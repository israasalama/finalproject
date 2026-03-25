import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the Little Lemon app', () => {
  render(<App />)
  const heading = screen.getByRole('heading', {
    name: 'Little Lemon',
    level: 1
  })
  expect(heading).toBeInTheDocument()
})