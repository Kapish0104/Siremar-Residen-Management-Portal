/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)


*/

import React, {useCallback} from 'react';
import Footer from './Footer';
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import NewNavbar from './NewNavbar';

export default function ResidentLogin() {

    const navigate = useNavigate()
      
    const goToUser = useCallback(() =>
    navigate('/user-login', {replace: true}), [navigate]);

    const goToAdmin = useCallback(() =>
    navigate('/admin-login', {replace: true}), [navigate]);

    const goToSuperAdmin = useCallback(() =>
    navigate('/super-admin-login', {replace: true}), [navigate]);

    function loginCheck(e) {

        const username=document.getElementById("username").value;
        const password= document.getElementById("password").value;
        userlogin({username,password })

        e.preventDefault()  
    
    }

    function verifyPassword(text) 
    { 
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if(text.value.match!= (passw)) 
        { 
        alert('Wrong ....')
        return false;
        }
      
    }
     const userlogin = (param) => {
       
          const url = new URL("http://localhost:80/siremar_backend/authenticateuser.php"),
          //const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/authenticateuser.php"),
            params = param
          Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
          return fetch(url)
            .then((res) => res.json())
            .then((response) => {
                window.sessionStorage.setItem("loggedin", "true");
                window.sessionStorage.setItem("username", response.name);
                window.sessionStorage.setItem("county", response.county);
                localStorage.setItem('resident',JSON.stringify(response))
                console.log(response.success_flag)
                if(response.success_flag === '0'){
                    document.getElementById('errorAlert').innerHTML = "Wrong ID or Password!";
                }
                if(response.role=='resident') goToUser();
                if(response.role=='inspector') goToAdmin();
                if(response.role=='admin') goToSuperAdmin();

              //}
            })
            .catch((err) => {
                
              console.log('in err', err);
             // return err;
            });
        }
      
  return (
        <>
        <NewNavbar/>
        <div className="master-container">
            <div className="login-page">
                <div className="login-content">
                <div className="login-heading">
                    LOGIN
                </div>
                <div className='error Message'>
                <p id="errorAlert"></p>
                </div>
                    <form>
                        <label>Email : </label>   
                        <input type="text" placeholder="Enter Username" name="username" id="username" required/><br/><br/>
                        <label>Password : </label>   
                        <input type="password" placeholder="Enter Password" name="password" id ="password" required/><br/><br/>
                        <button type="submit" onClick={loginCheck}>Login</button>   
                    </form> 
                </div>
            </div>
            <Footer/>
        </div>
        </>
  )
}
