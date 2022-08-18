import React from 'react'

export default function blog2() {
  return (
    <div>
      <div className="blog-container">
      <div className="blog-heading">
      	<span className="line1"> ADVANTAGES AND FEATURES OF SIREMAR</span><br/>
      	<span className="line2">-Richa Pagare (1001873138)</span>
      	<div className="blog-image">
      		<img src={require("./images/Richa.jpg")}/>
      	</div>
      </div>
   
      <div className="blog-content">
      	
		<p>Siremar is a robust resident management portal accessible to the residents of Margarita Islands where they can avail several services. <br/>Major Advantages of having this system are: <br/><br/>1. There is a record of how many people are residing on the island. This helps the authorities gather appropriate amounts of resources for the people. </p>
		

		
		<p>2. Easy to register as a resident for the island. </p>
		
		<p> <img className="f1" src={require("./images/f1.JPG")}/></p>

		
		<p>3. Get a unique resident ID after registering as a resident. </p>
		

		
		<p>4. Residents get numerous and exclusive discounts and benefits in booking for flights, ferries, on clinics, fees for the university, etc. </p>
		

		
		<p>5. Residents get updates about any events that are happening on the island. </p>
		

		
		<p>6. 24x7 chat support available to the residents. </p>
		
		<p> <img className="f2" src={require("./images/f2.JPG")}/></p>

		<p>7. Every area has dedicated Inspector to look after the residents. </p>
		

		
		<p>8. Can move out easily after filling out a form.</p>
		
		<p> <img className="f3" src={require("./images/f3.JPG")}/></p>

		
		<p>9. Admins have access to exclusive reports and charts for analyzing the population.<br/></p>
		
		<p> <img className="f4" src={require("./images/f4.JPG")}/></p>
      </div>
    </div>
    </div>
  )
}
