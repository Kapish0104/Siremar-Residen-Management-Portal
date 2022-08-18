/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)


*/

import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginNavbar() {
  return (
    <>
        
        <div className="navigation-header">
          <div className="menu-items">
            <ul>
              <li><Link to="/user-login">Home</Link></li>
              <li><Link to="/user-login">Events</Link></li>
              <li><Link to="/user-profile">My Profile</Link></li>
              <li><Link to="/">Logout</Link></li>
              <li className="uname"><img src ={require("./images/person-icon.png")}/>{sessionStorage.getItem('username')}</li>
            </ul>
          </div>
        </div>
    </>
  )
}
