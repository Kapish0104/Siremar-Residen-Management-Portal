/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)
*/

import React,{useState,useEffect} from 'react'
import AdminNavbar from './AdminNavbar'
import Footer from './Footer'


export default function ManageMoveouts() {
  
    const [moveout, setMoveOut] = useState([])
  useEffect(() =>{

  showAllMoveOuts()

  },[])
 
   const showAllMoveOuts = () => {

      const url = new URL("http://localhost:80/siremar_backend/getmoveout.php"),
      //const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/getmoveout.php"),
        params = {}
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
      return fetch(url)
        .then((res) => res.json())
        .then((response) => {
          console.log(response)
          setMoveOut(response)
          
        })
        .catch((err) => {
          return err;
        });
    
  }
 
  //Operation to delete a resident information from the database.
  const deleteMoveout = (id) => {

    const param={id}
    const url = new URL("http://localhost:80/siremar_backend/deletemoveout.php"),
   //const url = new URL("http://data.rxp3138.uta.cloud/siremar_backend/deletemoveout.php"),
    params = param
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
return fetch(url)
    .then((res) => res.json())
    .then((response) => {
        if (response.status === 'true') {
            
            window.alert("Moveout successful");
            showAllMoveOuts();
            
        }
    })
    .catch((err) => {
        console.log('in err', err);
        return err;
    });

}
  
    return (
        <>
        <div className="master-container">

            <div className="user-container"> 
            <AdminNavbar/>
            <div className="user-welcome">
            
            <span>
                Manage Move-Outs
            </span>
            </div>
                <div className="Move-Out">
                    <h4>Move-Out Database</h4>
                    <table border="1" id="customers">
                        <tbody>
                            <tr>
                                <th>Resident Id</th>                          
                                <th>Move-out Date</th>
                                <th>Reason </th>
                                <th>Action</th>
                            </tr>
                            {
                                moveout.map((item, index) => (
                                
                                <tr key={`${index}-moveout`}>
                                    <td>{item.id} </td>
                                    <td>{item.date} </td>
                                    <td>{item.reason} </td> 
                                    <td><input type="button" onClick={()=> deleteMoveout(item.id)} value="Validate"/> </td>                              
                                </tr>

                            ))
                            }
                         
                        </tbody>
                    </table>
                </div>
            </div>
        <Footer/> 
        </div>
        </>
        )
}
