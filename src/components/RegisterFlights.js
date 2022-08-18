/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)

*/

import React,{useState}from 'react'
import AdminNavbar from './AdminNavbar'

export default function RegisterFlights() {
 
 
  const [flight, setFlight] = useState({
    flightname: '',
    flightno: '',
    destination:'',
    date: '',
    time: '',
    
  })

  const changeFlightData = (e) => {
    setFlight({
      ...flight,
      [e.target.name]: e.target.value
    })
  }

  function clearForm() {
    document.getElementById('flightname').value = ""
    document.getElementById('flightno').value = ""
    document.getElementById('destination').value = ""
    document.getElementById('date').value = ""
    document.getElementById('time').value = ""
}
  const registerFlights = (e) => {
    e.preventDefault();
    console.log(e)
      const url = new URL("http://localhost:80/siremar_backend/registerflight.php"),
      //const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/registerflight.php"),
        params = flight
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      return fetch(url)
        .then((res) => res.json())
        .then((response) => {
          //if (response.status === 'true') {
            //return true;
            // localStorage.setItem('resident',JSON.stringify(response))
            console.log(response)
            if(response.status == "true") {
              clearForm()
            }          
           
        })
        .catch((err) => {
          console.log('in err', err);
          // return err;
        });
  }
 
 

  return (
      <>
        <div className="master-container">
        <AdminNavbar/>
          <div className="service-registration-page">

              <div className="reg-content">
                                    
                <div className="registration-form">
                    <div className="heading">
                      Flight Registration Form<br/><br/>
                    </div>
                    <form action="reg.html">

                      <div className="field-name">
                      <label for="Name of the Arlines"><b> Name of the Arlines*:</b></label>
                      </div>
                      
                      <div className="field-input">        
                        <input  onChange={changeFlightData} type="text" value={flight.flightname} placeholder="Airlines Name" name ="flightname" id="flightname" required/><br/>
                      </div>
                      <div className="field-name">
                      <label for="Clinic Id"><b>Flight Number*:</b></label>
                      </div>

                      <div className="field-input">
                      <input onChange={changeFlightData} type="text" value={flight.flightno} placeholder="Enter Flight Number" name="flightno" id="flightno" required/><br/>
                      </div>

                      <div className="field-name">
                          <label for="Destination"><b>Destination*:</b></label>
                      </div>
                          
                      <div className="field-input">        
                        <input onChange={changeFlightData} type="text" value={flight.destination} placeholder="destination" name="destination" id="destination" required/><br/>
                      </div>

                      <div className="field-name">
                          <label for="Date"><b>Date*:</b></label>
                        </div>
                          
                      <div className="field-input">        
                            <input onChange={changeFlightData} type="date" value={flight.date} placeholder="Date" name="date" id="date" required/><br/>
                      </div>


                      <div className="field-name">
                      <label for="Time"><b>Time*:</b></label>
                      </div>
                      
                      <div className="field-input">        
                        <input onChange={changeFlightData} type="time" value={flight.time} placeholder="Time" name="time" id="time" required/><br/>
                      </div>
                        
                      <div className="input-button">
                        <br/>
                        <input type="submit" onClick={registerFlights} value="Register"/>
                      </div>
                    </form>

                </div>

               </div>

            </div>

        </div>
        </>
  )
}
