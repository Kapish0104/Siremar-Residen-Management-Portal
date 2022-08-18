/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)
*/

import React,{useState} from 'react'
import AdminNavbar from './AdminNavbar'

export default function RegisterSchool() {

    const [school, setSchool] = useState({
        schoolname: '',
        schoolcode: '',
        address:'',
        
      })
    
      const changeSchoolData = (e) => {
        setSchool({
          ...school,
          [e.target.name]: e.target.value
        })
      }
      
      function clearForm() {
        document.getElementById('schoolname').value = ""
        document.getElementById('schoolcode').value = ""
        document.getElementById('address').value = ""
      }
      const registerSchool = (e) => {
        e.preventDefault();
        console.log(e)
          const url = new URL("http://localhost:80/siremar_backend/registerschool.php"),
          //const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/registerschool.php"),
            params = school
          Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
          return fetch(url)
            .then((res) => res.json())
            .then((response) => {
              
                console.log(response)
                if(response.status == "true") {
                  clearForm()
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
                        <div className="heading">School Registration Form<br/><br/>
                        </div>
                        <form action="reg.html">
                            <div className="field-name">
                                <label for="Name of the school"><b>Name of the school*:</b></label>
                            </div>
                            <div className="field-input">        
                                <input onChange={changeSchoolData} type="text" value={school.schoolname} placeholder="Name of the school" name="schoolname" id="schoolname" required/><br/>
                            </div>
                            <div className="field-name">
                                <label for="school code"><b>School code*:</b></label>
                            </div>
                            <div className="field-input">
                                <input onChange={changeSchoolData} type="text" value={school.schoolcode} placeholder="Enter School code" name="schoolcode" id="schoolcode" required/><br/>
                            </div>
                            <div className="field-name">
                                <label for="address"><b>Address*:</b></label>
                            </div>
                            <div className="field-input">
                                <input onChange={changeSchoolData} type="text" value={school.address} placeholder="Address Line " name="address" id="address" required/><br/>
                            </div>
                            <div className="input-button">
                                <br/>
                                <input type="submit" onClick={registerSchool} value="Register"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
