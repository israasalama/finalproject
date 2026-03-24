import logo from './assets/Logo .svg'
import './Header.css'

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt="Little Lemon logo" />
    </header>
  )
}

export default Header