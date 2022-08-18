/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)


*/
import React,{useState,useEffect} from 'react'
import Footer from './Footer'
import LoginNavbar from './LoginNavbar'
import Chat from './Chat'
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

export default function UserLogin() {
  const room = 2;
  const username = sessionStorage.getItem('username');
  socket.emit("join_room", room);
  const [flight, setFlight] = useState([])

  useEffect(() =>{

  showAllFlights()

  },[])
 
   const showAllFlights = () => {

      const url = new URL("http://localhost:80/siremar_backend/getflights.php"),
     //const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/getflights.php"),
        params = {}
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      return fetch(url)
        .then((res) => res.json())
        .then((response) => {
          console.log(response)
          setFlight(response)
          
        })
        .catch((err) => {
          return err;
        });
    
  }

  const [business, setBusiness] = useState([])
  useEffect(() =>{
  showAllBusiness()

  },[]) 
  

  const showAllBusiness = () => {

   const url = new URL("http://localhost:80/siremar_backend/getbusiness.php"),
   //const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/getbusiness.php"),
      params = {}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return fetch(url)
      .then((res) => res.json())
      .then((response) => {
        console.log(response)
        setBusiness(response)
        
      })
      .catch((err) => {
        return err;
      });
  
}


const [clinic, setClinic] = useState([])
  useEffect(() =>{

    showAllClinics()

  },[])
 
   const showAllClinics = () => {

      const url = new URL("http://localhost:80/siremar_backend/getclinic.php"),
      //const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/getclinic.php"),
        params = {}
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      return fetch(url)
        .then((res) => res.json())
        .then((response) => {
          console.log(response)
          setClinic(response)
          
        })
        .catch((err) => {
          return err;
        });
    
  }
  const [school, setSchool] = useState([])
  useEffect(() =>{

  showAllSchools()

  },[])
 
   const showAllSchools = () => {

      const url = new URL("http://localhost:80/siremar_backend/getschool.php"),
      //const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/getschool.php"),
        params = {}
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      return fetch(url)
        .then((res) => res.json())
        .then((response) => {
          console.log(response)
          setSchool(response)
          
          
        })
        .catch((err) => {
          return err;
        });
    
  }
  if(window.sessionStorage.getItem("loggedin") === "true"){
    return (
          <>
          <LoginNavbar/>
          {console.log('we are here')}
          <Chat socket={socket} username={username} room={room} />
          
            <div className="user-welcome">
            
            <span>
              Welcome!
            </span>
            </div>
            <div className="user-offers" id="offers">
                <div className="user-offers-heading"> Here Are Some Offers For You!</div>

                <div className="flights-table">
                    <h4>Flights Discounts</h4>
                    <table border="1" id="customers">
                        <tbody>
                        <tr>
                          <th>Flight Number</th>
                          <th>Airlines Name</th>
                          <th>Destination</th>
                          <th>Date</th>
                          <th>Time</th>
                          
                        </tr>
                    {
                      flight.map((item, index) => (
                      
                        <tr key={`${index}-flight`}>
                            <td>{item.flightno} </td>
                            <td>{item.flightname} </td>
                            <td>{item.destination} </td>
                            <td>{item.date} </td>
                            <td>{item.time} </td>
                          
                        </tr>
    
  
                      ))
                      }
                    </tbody>
                    </table>
                </div>

                <div className="ferry-offers">
                  <h4>Businesses</h4>
                  <table border="1" id="customers">
                      <tbody>
                      <tr>
                          <th>Business ID</th>
                          <th>Business Name</th>
                          <th>Offer</th>
                          
                        </tr>
                    {
                      business.map((item, index) => (
                      
                        <tr key={`${index}-business`}>
                            <td>{item.businessid} </td>
                            <td>{item.businessname} </td>
                            <td>{item.offer} </td>
                      </tr>
    
                      ))
                      }
            
                    </tbody>
                  </table>
                </div>

                <div className="flights-table">
                  <h4>Clinics </h4>
                  <table border="1" id="customers">
                      <tbody>
                    <tr>
                      <th>Clinic Name</th>
                      <th>Clinic ID</th>
                      <th>Speciality</th>
                      <th>Address</th>
                      <th>Offercode</th>
                    </tr>
                    
                    {
                      clinic.map((item, index) => (
                      
                        <tr key={`${index}-clinic`}>
                            <td>{item.clinicname} </td>
                            <td>{item.clinicid} </td>
                            <td>{item.speciality} </td>
                            <td>{item.address} </td>
                            <td>{item.offercode} </td>
                          
                        </tr>
    
  
                      ))
                      }
                  
                    </tbody>
                  </table>
                </div>

                <div className="ferry-offers">
                    <h4>Schools in your area</h4>
                    <table border="1" id="customers">
                      <tbody>
                      <tr>
                        <th>School Name</th>
                        <th>Schhol Code</th>
                        <th>Address </th>
                        <th>School Website </th>
                      </tr>
                        {
                          school.map((item, index) => (
                      
                        <tr key={`${index}-school`}>
                            <td>{item.schoolname} </td>
                            <td>{item.schoolcode} </td>
                            <td>{item.address} </td>
                            <td><a href="#">Dummy School Website Link</a></td>
          
                          
                        </tr>
    
  
                      ))
                      }
                    
                      </tbody>
                    </table>
                </div>
              </div>
              <Footer/>
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
