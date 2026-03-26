import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import BookingPage from './BookingPage'
import ConfirmedBooking from './ConfirmedBooking'
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App