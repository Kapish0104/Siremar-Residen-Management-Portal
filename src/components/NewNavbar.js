/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)


*/

import React from 'react'
import { Link } from 'react-router-dom'

export default function NewNavbar() {
  return (
    <>
        <div className="navigation-header">
            <div className="menu-items">
              <ul>
                <li><Link to="/">Home</Link></li>
              
                <li><Link to="/login">Resident Login</Link></li>
                <li><Link to="/newreg">Apply For Residence</Link></li>
              </ul>
          </div>
        </div>
    </>
  )
}
