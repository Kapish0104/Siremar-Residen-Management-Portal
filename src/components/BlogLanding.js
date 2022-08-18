import React from 'react'
import { Link } from 'react-router-dom';
import NewNavbar from './NewNavbar';

export default function BlogLanding() {
  return (
    <div className="master-container">
    <NewNavbar/>
    <div className="login-page">
        <div className="login-content">
        <div className="login-heading">
          
        </div>
        <Link to="/blog2">Advantages and Features</Link><br/>
        <Link to="/blog1">Disadvantages of Siremar</Link><br/>
        <Link to="/blog3">Room for Improvement</Link><br/>
        </div>
    </div>
    </div>
  )
}

