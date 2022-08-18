/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)
*/
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import SuperAdminNavbar from './SuperAdminNavbar'
import Chat2 from './Chat2'
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

export default function SuperAdminLogin() {

const room = 2;
const username = sessionStorage.getItem('username');
socket.emit("join_room", room);

if(window.sessionStorage.getItem("loggedin") === "true"){
  return (
        <>
        <div className="master-container">
            <div className="user-container">   
             <SuperAdminNavbar/>

                <div className="user-content admin-content">

                <Chat2 socket={socket} username={username} room={room} />
                <div className="user-welcome">
                    <span>
                    Welcome Admin<br/>
                    </span>
                </div>
                <div className="admin-container">
                    <div className="super-admin-menu">
                    <div className="manage-residents button">
                        <Link to="/manage-admin-resident"> MANAGE RESIDENTS/ REGISTER ADMINS</Link>
                    </div>
                    <div className="manage-admin button">
                        <Link to="/manage-admin"> MANAGE INSPECTORS</Link>
                    </div>
                    {/* <div className="manage-county button" >
                        <Link to="/manage-county"> MANAGE COUNTY</Link>
                    </div> */}
                    <div className="manage-insights button" >
                        <Link to="/view-insights"> VIEW INSIGHTS</Link>
                    </div>
                    </div>
                </div>
                </div>
                <Footer/>
            </div>
        </div>
 
        </>
  )
}
else {
    return (
      <>
      <h1>Please login</h1>
      </>
    )
  }
}
