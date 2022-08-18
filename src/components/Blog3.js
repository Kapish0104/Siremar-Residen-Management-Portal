import React from 'react'

export default function blog3() {
  return (
    <div>
      <div className="blog-container">
      <div className="blog-heading">
      	<span className="line1"> ROOM FOR IMPROVEMENTS</span><br/>
      	<span className="line2">-Jahnavi Gutta (1002011051)</span>
        <div className="blog-image">
          <img src={require("./images/jahnavi.jpg")}/>
        </div>
      </div>
      <div className="blog-content">
				Some features that can be further worked upon in this platform are:<br/><br/>

				1. An inter-resident chat feature can be integrated in the system, making it a mini social media platform for the residents only.<br/><br/>

				2. Development of an app for easy access to the residents.<br/><br/>

				3. Enhancements in the user interface giving it more smoother transitions.<br/><br/>
        <br/><br/>

      </div>
    </div>
    </div>
  )
}

