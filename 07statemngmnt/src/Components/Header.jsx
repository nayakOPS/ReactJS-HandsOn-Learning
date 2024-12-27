import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
         <nav>
            <ul>
                <li>
                    <NavLink to="/home" exact activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" activeClassName="active">Profile</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header