/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)

*/

import React,{useState} from 'react'
import LoginNavbar from './LoginNavbar'

export default function MyProfile() {
   
    const [moveout, setMoveout] = useState({
      date: '',
      reason: '',
    
    })
  
    const changeMoveOutData = (e) => {
      setMoveout({
        ...moveout,
        [e.target.name]: e.target.value
      })
    }
  
    const registerMoveout = (e) => {
      e.preventDefault();
      console.log(e)
       const url = new URL("http://localhost:80/siremar_backend/registermoveout.php"),
      // const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/registermoveout.php"),
          params = {...moveout, id:res.id}
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        return fetch(url)
          .then((res) => res.json())
          .then((response) => {          
              console.log(response)
              if(response.status=='true') { 
                alert("Success")
                setMoveout({date:'',reason:''})              
              }          
             
          })
          .catch((err) => {
            console.log('in err', err);
            
          });
    }

    const res = JSON.parse(localStorage.getItem('resident'));
    //console.log(res);

    return (
    <>
        <LoginNavbar/>
        <div className="user-content">
          <div className="user-welcome">
            <span>
              My Profile
            </span>
          </div>
          <div className="profile-container">
            <div className="user-img" >
              <img src={require("./images/tree.jpg")}/>
            </div>
            <div className="profile-det name">Resident ID: {res.id}</div>
            <div className="profile-det name">NAME : {res.name}</div>
            <div className="profile-det Contact">YOUR CONTACT INFO: {res.contact}</div>
            <div className="profile-det name">YOUR ADDRESS : {res.address1} <br/> {res.address2}</div>
            <div className="move-out"> <b>PLANNING TO MOVE OUT? Fill in the MOVE OUT FORM </b>  </div>
            <div className="move-out-form">
              <form action="#">
                <div className="row">
                  <div className="field-name">
                    <label htmlFor="firstname"><b>Move out Date*:</b></label>
                  </div>
                  <div className="field-input">
                    <input onChange={changeMoveOutData} value={moveout.date} name= "date" type="date" />
                  </div>
                </div>

                <div className="row">
                  <div className="field-name">
                    <label htmlFor="Reason:"><b>Reason to Move Out*:</b></label>
                  </div>

                  <div className="field_textarea">
                      <textarea onChange={changeMoveOutData} name= "reason" value={moveout.reason} rows="6" placeholder="Reason to move out"></textarea>
                  </div>

                  <input className="submit-req" type="submit" onClick={registerMoveout} value="Submit"/>
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}
