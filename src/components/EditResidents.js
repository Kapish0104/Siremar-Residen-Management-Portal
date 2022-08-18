/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)
*/

import React,{useState} from 'react'
import AdminNavbar from './AdminNavbar'
import Footer from './Footer'

export default function RegisterClinic() {
  
    const [clinic, setClinic] = useState({
        clinicname: '',
        clinicid: '',
        speciality: '',
        address: '',
        offercode: '',
      
      })
    
    const changeClinicData = (e) => {
        setClinic({
          ...clinic,
          [e.target.name]: e.target.value
        })
      }
    
    const registerClinic = (e) => {
        e.preventDefault();
      
          const url = new URL("http://localhost:80/siremar_backend/registerclinic.php"),
          //const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/registerclinic.php"),
            params = clinic
          Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
          return fetch(url)
            .then((res) => res.json())
            .then((response) => {
    
                console.log(response)   
                if(response.status) {
                 
                }          
               
            })
            .catch((err) => {
              console.log('in err', err);
              
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
                                    Clinic Registration Form<br/><br/>
                                </div>
                                <form action="reg.html">
                                    <div className="field-name">
                                        <label for="Name of the Resident"><b> Name of the resident*:</b></label>
                                    </div>
                    
                                    <div className="field-input">        
                                        <input onChange={changeClinicData} type="text" value={clinic.clinicname} placeholder="Name of the clinic" name="name" id="name" required/><br/>
                                    </div>
                                    <div className="field-name">
                                        <label for="Clinic Id"><b>Resident Id*:</b></label>
                                    </div>
                                    <div className="field-input">
                                        <input onChange={changeClinicData} type="text" value={clinic.clinicid} placeholder="Resident Id" name="id" id="id" required/><br/>
                                    </div>
                                    <div className="field-name">
                                        <label for="Speciality"><b>Email*:</b></label>
                                    </div>
                                    <div className="field-input">        
                                        <input onChange={changeClinicData} type="text" value={clinic.speciality} placeholder="Email" name="username" id="username" required/><br/>
                                    </div>
                                    <div className="field-name">
                                        <label for="address"><b>Address*:</b></label>
                                    </div>
                                    <div className="field-input">
                                        <input onChange={changeClinicData} type="text" value={clinic.address} placeholder="Address Line " name="address" id="address" required/><br/>
                                    </div>
                                    <div className="field-name">
                                        <label for="offer"><b>County*:</b></label>
                                    </div>
                                    <div className="field-input">
                                        <input onChange={changeClinicData} type="text" value={clinic.offercode} placeholder="County" name="county" id="county" required/><br/>
                                    </div>
                                    <div className="field-name">
                                        <label for="offer"><b>Contact*:</b></label>
                                    </div>
                                    <div className="field-input">
                                        <input onChange={changeClinicData} type="text" value={clinic.offercode} placeholder="County" name="contact" id="contact" required/><br/>
                                    </div>
                                    <div className="input-button">
                                        <br/>
                                        <input type="submit" onClick={registerClinic} value="Register"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </>
        )
    }
