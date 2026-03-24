import logo from './assets/Logo .svg'

function Footer() {
  return (
    <footer>

      <img src={logo} alt="Little Lemon logo" />

      <div>
        <h4>Doormat Navigation</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>

      <div>
        <h4>Contact</h4>
        <ul>
          <li>123 W Randolph St, Chicago, IL 60601</li>
          <li>(312) 555-0199</li>
          <li>info@littlelemon.com</li>
        </ul>
      </div>

      <div>
        <h4>Social Media Links</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer