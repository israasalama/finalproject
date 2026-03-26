import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from '../BookingForm';

const availableTimes = ["17:00", "18:00"];
const dispatch = jest.fn();
const submitForm = jest.fn();

const renderBookingForm = () => {
  render(
    <BrowserRouter>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </BrowserRouter>
  );
};

describe('BookingForm Validation', () => {

  test('Date input has correct HTML5 validation attributes', () => {
    renderBookingForm();
    const dateInput = screen.getByLabelText(/Date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
  });

  test('Number of guests input has min and max attributes', () => {
    renderBookingForm();
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });


  test('Submit button is disabled by default (Invalid State)', () => {
    renderBookingForm();
    const submitButton = screen.getByRole('button', { name: /On Click/i });

    expect(submitButton).toBeDisabled();
  });

test('Submit button is enabled when form is valid (Valid State)', () => {
  renderBookingForm();
  const submitButton = screen.getByRole('button', { name: /On Click/i });
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2026-05-20' } });
  fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '17:00' } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });
  expect(submitButton).not.toBeDisabled();
});

});