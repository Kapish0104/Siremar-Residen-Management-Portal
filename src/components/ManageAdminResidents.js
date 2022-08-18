/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)
*/

import React,{useState,useEffect} from 'react'
import AdminNavbar from './SuperAdminNavbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function ManageResidents() {
    const [resident, setResident] = useState([])//for displaying resident information
    const [editInformation, setEditInfo] = useState(false);
    // residents- update
    const [residents, setResidents] = useState({
        id: '',
        name: '',
        username: '',
        address1: '',
        address2: '',
        county: '',
        contact: '',
      
      })
    
    const changeResidentsData = (e) => {
        console.log( e.target.name, e.target.value)
        setResidents({
          ...residents,
          [e.target.name]: e.target.value
        })
      }

    //Operation to edit the residents information.
    const  updateResidents = (e) => {
        e.preventDefault();
        const url = new URL("http://localhost:80/siremar_backend/editresident.php"),
        //const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/editresident.php"),
            params = residents
          Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
          return fetch(url)
            .then((res) => res.json())
            .then((response) => {
              if (response.length > 0 && response[0].id) {
                   window.alert("Updated Successfully")
                    setEditInfo(false)
                
              }
            })
            .catch((err) => {
              console.log('in err', err);
              return err;
            });        
      }
    
    useEffect(() =>{
    showAllResident();
  
    },[])
   
    //Operation to display all the residents information
     const showAllResident = () => {
        console.log('trying to show residents')
        const url = new URL("http://localhost:80/siremar_backend/getresidents.php"),
        //const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/getresidents.php"),
          params = {}
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        return fetch(url)
          .then((res) => res.json())
          .then((response) => {
            console.log(response)
            setResident(response)
           console.log('reaching hre') 
          })
          .catch((err) => {
            return err;
          });
      
    }
    
    //Operation to delete a resident information from the database.
   const deleteResident = (id) => {

                const param={id}
               const url = new URL("http://localhost:80/siremar_backend/deleteresident.php"),
               //const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/deleteresident.php"),
                params = param
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
            return fetch(url)
                .then((res) => res.json())
                .then((response) => {
                    if (response.status === 'true') {
                        showAllResident();
                        window.alert("Resident deleted ");
                    }
                })
                .catch((err) => {
                    console.log('in err', err);
                    return err;
                });
        
    }
    
    function makeAdmin(id) {
        const param={id}
                const url = new URL("http://localhost:80/siremar_backend/makeinspector.php"),
                //const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/makeinspector.php"),
                params = param
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
            return fetch(url)
                .then((res) => res.json())
                .then((response) => {
                    if (response.status === 'true') {
                        showAllResident();
                        window.alert("Resident Made Inspector ");
                    }
                })
                .catch((err) => {
                    console.log('in err', err);
                    return err;
                });

    }
  
    function editInfo(item={})
    {
        setResidents(item)
        setEditInfo(true);
    }

    return (
        <>
            <div className="master-container">
                <div className="user-container"> 
                    <AdminNavbar/>
                    <div className="user-welcome"> 
                        <span>
                            Manage Resident
                        </span>
                    </div>
                    {
                        editInformation ? (
                            <div>
                                <form action="reg.html">
                                    <div className="field-name">
                                        <label htmlFor="Name of the Resident"><b> Name of the resident*:</b></label>
                                    </div>
                    
                                    <div className="field-input">        
                                        <input onChange={changeResidentsData} type="text" value={residents.name} placeholder="Name of the clinic" name="name" id="name" required/><br/>
                                    </div>
                                  

                                    <div className="field-name">
                                        <label htmlFor="Email"><b>Email*:</b></label>
                                    </div>
                                    <div className="field-input">        
                                        <input onChange={changeResidentsData} type="text" value={residents.username} placeholder="Email" name="username" id="username" required/><br/>
                                    </div>
                                    <div className="field-name">
                                        <label htmlFor="address"><b>Address Line 1*:</b></label>
                                    </div>
                                    <div className="field-input">
                                        <input onChange={changeResidentsData} type="text" value={residents.address1} placeholder="Address Line 1" name="address1" id="address1" required/><br/>
                                    </div>

                                    <div className="field-name">
                                        <label htmlFor="address"><b>Address Line 2*:</b></label>
                                    </div>
                                    <div className="field-input">
                                        <input onChange={changeResidentsData} type="text" value={residents.address2} placeholder="Address Line 2" name="address2" id="address2" required/><br/>
                                    </div>

                                    <div className="field-name">
                                        <label htmlFor="county"><b>County*:</b></label>
                                    </div>
                                    <div className="field-input">
                                        <input onChange={changeResidentsData} type="text" value={residents.county} placeholder="County" name="county" id="county" required/><br/>
                                    </div>
                                    <div className="field-name">
                                        <label htmlFor="contact"><b>Contact*:</b></label>
                                    </div>
                                    <div className="field-input">
                                        <input onChange={changeResidentsData} type="text" value={residents.contact} placeholder="Contact" name="contact" id="contact" required/><br/>
                                    </div>

                                    <div className="input-button">
                                        <br/>
                                        <input type="submit" id = "updatebutton" onClick={updateResidents} value="Update"/><br/>
                                    </div>
                                   
                                </form>
                                <button onClick={() => setEditInfo(false)}> Back </button>
                            </div>
                        ) : (
                        <div className="Residents-table">
                            <h4>Residents Database</h4>
                            <table border="1" id="customers" >
                                <tbody>
                                <tr>
                                    <th>Resident Id</th>
                                    <th>Resident Name</th>
                                    <th>Address Line 1</th>
                                    <th>Address Line 2</th>
                                    <th>County</th>
                                    <th>Contact</th>
                                    <th>Action</th>
                                
                                </tr>                                                 
                                    {
                                        resident.map((item, index) => (
                                        
                                        <tr key={`${index}-resident`}>
                                            <td>{item.id} </td>
                                            <td>{item.name} </td>
                                            <td>{item.address1} </td>   
                                            <td>{item.address2} </td>   
                                            <td>{item.county} </td>
                                            <td>{item.contact} </td>                                          
                                            <td><input type="button" onClick={()=> deleteResident(item.id)} value="Delete"/>
                                            <input type="button" onClick={()=>editInfo(item)} value="Edit"/><input type="button" onClick={()=>makeAdmin(item.id)} value="Make Inspector"/></td>
                                            
                                        </tr>                   
                    
                                        ))
                                        }
                                </tbody>
                            </table>
                            </div>

                        )
                    }

                    </div>
                    <Footer/>
                </div>
                
        </>
  )
}
