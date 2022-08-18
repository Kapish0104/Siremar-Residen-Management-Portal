import React from 'react'

export default function Blog1() {
  return (
    <div>
      <div className="blog-container">
      <div className="blog-heading">
      	<span className="line1"> DISADVANTAGES OF SIREMAR</span><br/>
      	<span className="line2">-Kapish Shewale (1001870794)</span>
      	<div className="blog-image">
      		<img src={require("./images/kapish.jpeg")}/>
      	</div>
      </div>

      <div className="blog-content">
				While there are many advantages of having this online platform, there are several disadvantages as well:<br/><br/>

				1. The system does not keep track of the tourists. The tourists and immigrants on the island can also affect consumption of the resources.<br/><br/>

				2. An app is missing for the platform. If a mobile application is made as well then it could be used more easily.<br/><br/>

				3. The chat can be more faster if a dedicated team is appointed for support of the residents.<br/><br/>

				4. User interface is buggy at times.<br/><br/>

      </div>
    </div>
    </div>
  )
}
