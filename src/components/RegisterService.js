/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)


*/

import React from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import Footer from './Footer'

export default function RegisterService() {
  return (
        <>
        <div className="master-container">
        <AdminNavbar/>
        <div className="user-welcome">    
            <span>
            REGISTER A SERVICE
            </span>
        </div>
      <div className="serviceregistration">

        <div className="service-content">
    
      <div className="service-heading">
      What service do you want to register?<br/><br/>
    </div>
    
    <div className="dropdown">
      <button className="dropbtn">Choose a service</button>
      <div className="dropdown-content">
        <Link to="/register-school">School</Link>
        <Link to="/register-clinic">Clinic</Link>
        <Link to="/register-business">Business</Link>
        <Link to="/register-flights">Flights</Link>
      </div>
    </div>
</div>
</div>
    <Footer/>
</div> 
        </>
  )
}
