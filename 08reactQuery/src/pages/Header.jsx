import { NavLink } from 'react-router-dom'
export default function Header() {
    return (
      <div>
           <nav>
              <ul>
                  <li>
                      <NavLink to="/home" exact activeClassName="active">Home</NavLink>
                  </li>
                  <li>
                      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                  </li>
                  <li>
                      <NavLink to="/profile" activeClassName="active">Profile</NavLink>
                  </li>
              </ul>
          </nav>
      </div>
    )
  };
  