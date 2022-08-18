/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)


*/

import React,{useState} from 'react'
import AdminNavbar from './AdminNavbar'

export default function RegisterBusiness() {
   
  const [business, setBusiness] = useState({
    businessname: '',
    businessid: '',
    offer:'',
  
  })

  const changeBusinessData = (e) => {
    setBusiness({
      ...business,
      [e.target.name]: e.target.value
    })
  }

  function clearForm() {
    document.getElementById('businessname').value = ""
    document.getElementById('businessid').value = ""
    document.getElementById('offer').value = ""
}
  const registerBusiness = (e) => {
    e.preventDefault();
  
      const url = new URL("http://localhost:80/siremar_backend/registerbusiness.php"),
      //const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/registerbusiness.php"),
        params = business
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
                        <div className="heading">
                        Business Registration Form<br/><br/>
                        </div>
                        <form action="reg.html">

                                <div className="field-name">
                                        <label for="Name of the Business"><b>Name of the Business*:</b></label>
                                </div>
                                    
                                    <div className="field-input">        
                                    <input onChange={changeBusinessData} type="text" value={business.businessname} placeholder="Name of the Business" name ="businessname" id="businessname" required/><br/>
                                    </div>

                                    <div className="field-name">
                                    <label for="Business ID"><b>Business Id*:</b></label>
                                    </div>

                                    <div className="field-input">
                                    <input onChange={changeBusinessData} type="text" value={business.businessid} placeholder="Enter Business Id" name="businessid" id="businessid" required/><br/>
                                    </div>

                                    <div className="field-name">
                                        <label for="offer"><b>Offer: </b></label>
                                    </div>
                                        
                                        <div className="field-input">        
                                        <input onChange={changeBusinessData} type="text" value={business.offer} placeholder="offer" name="offer" id="offer" required/><br/>
                                        </div>
 
                                <div className="input-button">
                                    <br/>
                                    <input type="submit" onClick={registerBusiness} value="Register"/>
                                </div>
                        </form>

                </div>

            </div>

        </div>

    </div>
    </>
  )
}
