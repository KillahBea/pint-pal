import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <header>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <li>Explore</li>
        </ul>
        <h1>PintPal</h1>
        <ul>
          <li>About</li>
          <li>Shop</li>
        </ul>
      </header>
    </div>
  )
}
