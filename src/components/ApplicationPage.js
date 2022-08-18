/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)
*/

import React, { useState } from 'react'
import Footer from './Footer'

import NewNavbar from './NewNavbar';


export default function ApplicationPage() {

  const [user, setUser] = useState({
    fname: '',
    county: '',
    zip:'',
    add1:'',
    add2:'',
    email: '',
    pass1: '',
    contact: '',
    residenceType:'',
    role: 'resident',
  })


  const changeUserData = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  function validate(e){

    console.log("here")
    if(document.getElementById("pass1").value.trim() != document.getElementById("pass2").value.trim())
    {
      return "Both passwords do not match each other";
    }
    if(document.getElementById("pass1").value.trim().length < 8)
    {
      return "passwords should me minimum 8 characters and maximum 16 characters long"
    }

    if(document.getElementById("contact").value.trim().length != 10)
    {
      return "enter 10 digit local contact without country code"
    }

    
    else if(document.getElementById("zip").value.trim().length <4)
    {
      return "Zip cannot be less than 4 digits"
    }
  }

  function submitForm(e) {
    e.preventDefault();
    var validateMessage = null
    validateMessage = validate(e);
    console.log(validateMessage);
    if(validateMessage == null)
    {
      registerOperation(e);
      customReset();
      
    }
    else {
      document.getElementById('errorAlert').innerHTML = validateMessage;
    }
  }

  function customReset() {
    document.getElementById("fname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass1").value = "";
    document.getElementById("pass2").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("add1").value = "";
    document.getElementById("add2").value = "";
    document.getElementById("add2").value = "";
    document.getElementById("county").value = "";
    document.getElementById("zip").value = "";
  }

const registerOperation = (e) => {
   
  e.preventDefault();
  
    const url = new URL("http://localhost:80/siremar_backend/registeruser.php"),
    //const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/registeruser.php"),
      params = user
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return fetch(url)
      .then((res) => res.json())
      .then((response) => {
          console.log(response)
          if(response.status === "true") {
            window.alert('Registered Successfully!!')
            document.getElementById('errorAlert').innerHTML = ""
          }          
        
      })
      .catch((err) => {
        console.log('in err', err);
        // return err;
      }
      );
      
}


  return (
    <>
    <NewNavbar/>
    <div className="new-registration-page">
    <div className="reg-content">
      <div className="instructions">
        <b>Important Instructions:</b><br/>
        1. You can register as a resident only and only if you were born on this island, or you are staying here since the past 1 year.<br/>
        2. The information needs to be correct. You can be asked to leave any time if we find out that any of the information is incorrect.<br/>
        3. You will have to submit the document proofs to support your residence.
      </div>
      <div className="registration-form">
        <div className="heading">
          RESIDENT REGISTRATION<br/><br/>
        </div>
        <div className="message">
          <p id="errorAlert"></p>
        </div>
        <form onSubmit={submitForm} name ="regForm" id="regForm">
          <div className="field-name">
            <label htmlFor="firstname"><b>Name*:</b></label>
          </div>
    
          <div className="field-input">        
            <input onChange={changeUserData} type="text" value={user.fname} placeholder="Enter Full Name" name="fname" id="fname" required/><br/>
          </div>

          <div className="field-name">
            <label htmlFor="email"><b>Email*:</b></label>
          </div>

          <div className="field-input">
            <input onChange={changeUserData} type="email" value={user.email} placeholder="Enter Email" name="email" id="email" required/><br/>
          </div>

          <div className="field-name">
            <label htmlFor="email"><b>Password*:</b></label>
          </div>

          <div className="field-input">
            <input onChange={changeUserData} type="password" value={user.pass1} placeholder="Create Password" name="pass1" id="pass1" required/><br/>
          </div>

          <div className="field-name">
            <label htmlFor="email"><b>Re-enter Password*:</b></label>
          </div>

          <div className="field-input">
            <input onChange={changeUserData} type="password"  placeholder="Re-enter Password" name="pass2" id="pass2" required/><br/>
          </div>

          <div className="field-name">
            <label htmlFor="contact"><b>Contact Number*:</b></label>
          </div>

          <div className="field-input">
            <input onChange={changeUserData} type="number" value={user.contact} placeholder="Enter Contact" name="contact" id="contact" required/><br/>
          </div>

          <div className="field-name">
            <label htmlFor="address"><b>Address*:</b></label>
          </div>

          <div className="field-input">
            <input onChange={changeUserData} type="text" value={user.add1} placeholder="Address Line 1" name="add1" id="add1" required/><br/>
            <input onChange={changeUserData} type="text" value={user.add2} placeholder="Address Line 2" name="add2" id="add2"/><br/>
          </div>

            <div className="field-name">
            <label htmlFor="county"><b>County*:</b></label>
          </div>
          <div className="field-input">
            <input onChange={changeUserData} type="text" value={user.county} placeholder="County" name="county" id="county" /><br/>
            </div>
            <div className="field-name">
            <label htmlFor="county"><b>Zip-Code*:</b></label>
          </div>
          <div className="field-input">
            <input onChange={changeUserData} type="text" value={user.zip} placeholder="Zip" name="zip" id="zip" /><br/>
            </div>
           
            <br/>
            <div class="field-name"><label for="idproof"><b>Residence Proof*:</b></label></div>
            <div class="field-input"><select onChange={changeUserData} value={user.residenceType} name="residenceType" id="residenceType"><option value="none">Select One</option><option>Birth Certificate (If you were born here)</option><option >Last one year's address proof (if you were here since last one year)</option></select></div>
            <div className="input-button">
            <input type="submit" value="Register"/>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
  </div>
  </>
  )
}
