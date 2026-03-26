import { Routes, Route } from 'react-router-dom';
import { useReducer, useState } from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from './api';

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    const selectedDate = new Date(action.payload);
    return fetchAPI(selectedDate);
  }
  return state;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [bookings, setBookings] = useState(() => {
  const savedBookings = localStorage.getItem('bookings');
  return savedBookings ? JSON.parse(savedBookings) : [];
});
  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      const updatedBookings = [...bookings, formData];
      setBookings(updatedBookings);
      localStorage.setItem('bookings', JSON.stringify(updatedBookings));
      return true;
    }
    return false;
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
          </>
        } />

        <Route path="/reservations" element={
          <BookingPage
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        } />

        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;