
import { NavLink } from 'react-router-dom'

function NavHeader() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/home">
            Home
          </NavLink>
        </li>
        <li>
        <NavLink to="/login">
            Login
          </NavLink>
        </li>
        <li>
        <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavHeader