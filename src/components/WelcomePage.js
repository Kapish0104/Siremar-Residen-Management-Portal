/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)


*/
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import emailjs from 'emailjs-com'
export default function WelcomePage() {
    
  function sendEmail(e){
   
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_hf6956b', e.target, 'zBGhhJ5J6oOhkxT7H')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      document.getElementById("feedbackForm").reset();
    window.alert("Message sent! We will get back to you shortly!")
}
window.sessionStorage.setItem("loggedin", "false");
  console.log(window.sessionStorage.getItem("loggedin"))
  return (
    <>
      <Navbar/> 
      <div className="master-container" id="master-container">
        <div className="welcome-heading">
          <span>
            Welcome To The Margarita Islands
          </span>
          <div className="down-arrow">
            <a href = "#about"><img alt="" src={require("./images/down-arrow.png")}/> </a>
          </div>
          <div className="down-arrow">
            <a href = "#about"><img alt="" src={require("./images/down-arrow.png")}/> </a>
          </div>
        </div>
        

        <div className="about" id="about">
          <div className="about-image">
            <img alt="" src={require("./images/about.jpg")}/>
          </div>
          <div className="about-content">
            Margarita Island is the largest island in the Venezuelan state of Nueva Esparta, situated off the northeastern coast of the country, in the Caribbean Sea. The capital city of Nueva Esparta, La Asuncion, is located on the island.
            In modern times, Margarita Island has been primarily a tourist destination.The island's status as a duty-free port was established in 1974 to promote commercial and tourism industries, with lower-priced imports driving increased visitors and the development of hotels.The island was the host venue for the Caribbean Series in 2010 and 2014.
          </div>
        </div>

        


        <div className="about-2" id="about-2">
          
          <div className="about-content">
            <div className="heading">ABOUT SIREMAR</div>
              <div className="content">
              Siremar is a web service that provides all kinds of services for the people of Margarita islands.Siremar is a web portal which manages all kind of services that are required for the residents of the island. To be a resident of this island the person need to stay more than a year. Siremar manages all the information related to different counties in the island. Through the Siremar the residents can explore to various services provided. The operations through Siremar are easy to operate with basic knowledge in the technology.
              </div>
          </div>
        </div>

        <div className="about-3">
          <div className="about-content">
            <div className="heading">OUR SERVICES</div>
            <div className="content">
              The residents will be entitled to some benefits upon registration. These benefits will be getting discounts on businesses, flights, clinics, upcoming events and getting preference in school. These benefits will also need to be registered on Siremar website.A resident will be able to view the various benefits available to him/her after logging in. He will be able to view various discounted prices for flights to his preferred destination at a certain date. Similarly, he will be able to check for various business deals, schools and clinics. All the details regarding any upcoming event shall also be displayed on this page. A resident will also have a feature to be able to chat with the inspector on his/her page. Additionally, the user will be able to view a move out form which could be filled in when he/she plans to leave.
            </div>
          </div>
        </div>

        <div className="contact-us" id="contact">
              
        <div className="contact-content">
            <div className="heading">CONTACT-US</div>
            <div className="content">
              <br/><br/>
              CALL US AT: +18458482311<br/>
              EMAIL:Siremar.support@gmail.com
            </div>
        </div>

          <div className="contact-feedback">
            <div className="heading">
              --FEEDBACKS--
            </div>
              <div className="content">
                       
                <form onSubmit={sendEmail} id="feedbackForm">
                  <div className="auth-form-box-grid">
                    <div className="field-contact">
                      <input type="text" name= "name" placeholder="Enter Full Name" required/>
                    </div>

                    <div className="field-contact">
                      <input type="text" name ="email" placeholder="Enter Email" required/>
                    </div>

                    <div className="field-contact">
                      <input type="text"name="subject" placeholder="Enter Subject" required/>
                    </div>

                    <div className="field_textarea">
                      <textarea rows="6" placeholder="Your thoughts!!!"></textarea>
                    </div>

                    <input className="submit-req" type="submit" value="Submit"/>

                  </div>
                </form>
              </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}
