/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)


*/
import React from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import Footer from './Footer'
import Chat2 from './Chat2'
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

export default function AdminLogin() {
  if(window.sessionStorage.getItem("loggedin") === "true"){
  const room = 2;
  const username = sessionStorage.getItem('username');
  socket.emit("join_room", room);
  
  return (
    <>
    <div className="master-container">
      <div className="user-container">   
        <AdminNavbar/>
        <div className="user-content admin-content">
        <Chat2 socket={socket} username={username} room={room}/>
        <div className="user-welcome">  
          <span>
            Welcome Inspector<br/>
            {sessionStorage.getItem("county")}
          </span>
        </div>
          <div className="admin-container">
            <div className="admin-menu">
              <div className="manage-residents button">
                <Link to="/manage-resident"> MANAGE RESIDENTS</Link>
              </div>
              <div className="register-a-service button">
                <Link to="/register-service"> REGISTER A SERVICE</Link>
              </div>
              <div className="manage-move-outs button" >
                <Link to="/move-out"> MANAGE MOVEOUTS</Link>
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
