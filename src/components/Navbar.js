/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)


*/

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <div className="navigation-header">
            <div className="menu-items">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="/#about-2">About</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><Link to="/login">Resident Login</Link></li>
                <li><Link to="/newreg">Apply For Residence</Link></li>
                <li><Link to="/bloglanding">Blogs</Link></li>
              </ul>
          </div>
        </div>
    </>
  )
}
