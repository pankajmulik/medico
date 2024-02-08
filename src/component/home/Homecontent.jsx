import React from 'react'
import './Homecon.css'
import Services from '../services/Services'
import Videoplayer from '../Videoplayer'


const Homecontent = () => {

  
  return (
    <div id='Homecontent'>
      <div className="confirst-home">
      <div className="homeconone">
        <div className="onecon">

          <div className="sidecon">

          </div>
          <div className="cononetext">

            <h1 id='onetextheading'>Quality Medical treatment</h1>

            <p id='conpara'>
              With Best Medical staff <br /> a
            Equiped with latest machinery <br />
                  We offer better Treatment
            </p>


          </div>
          <div className="imgscon">

            <img src="https://media.istockphoto.com/id/1344622271/photo/family-portrait.jpg?s=612x612&w=0&k=20&c=2a_6tktGhkiG_pm7PFQ8-x5sJAF2PBQrdtTO0u-MhPc="
              alt="family pic" />
          </div>

          </div>
        

        <div className="contactform">

          <div className="form-heading">
            <h2>Book An Appointment!</h2>
          </div>

          <div className="form-control">

            <div>
              <p style={{ fontSize:'10px'}}>
                Fill the details below so we our Executive get in touch with you for bool an appointment!
              </p>
            </div>
            <form action="#" method="post">
              <div>
                  <label htmlFor="name">Name:</label>
                  <br />
                <input type="text" name="uname" id="uname" placeholder='Enter you name' />
              </div>
              <div>
                  <label htmlFor="uemail">Email :</label> 
                  <br />
                <input type="email" name="uemail" id="uemail" placeholder='Enter Email ' />
              </div>

              <div>
                <label htmlFor="
                 number">Contact No.</label> <br />

                <input type="text" name="unumber" id="unumber" placeholder='Mobile no' />
              </div>

              <div id='subbtndiv'>
                <button type="submit" id='subbtn'>Submit</button>
              </div>

            </form>
          </div>


        </div>

        <div className="sidecon">

        </div>

        </div></div>
      <div className="second-div">
        
        <div className="second-div-head">
          <h1 id='whus'>Why  us ....</h1>

        </div>

        <div className="seccond-div-con">

            <div className="sidecons">
        
           </div>

        
          
          <div className="card">

            <div className="imgs">
              <i class="fa-solid fa-user-doctor" style={{fontSize:'50px',}}></i>
            </div>
            <div className="text" >
              <h3>Professional doctors</h3>
              <p>Best Doctors at your service 
                <br />
                Our Surgens are among top dcoctor <br />
                in india.
</p>
            </div>

          </div>
          <div className="card">

            <div className="imgs"><i class="fa-solid fa-people-group"style={{ fontSize: '50px' }}></i>
            </div>
            <div className="text">

              <h3>Family Medicine</h3>
<p>
              We care for you and Your Family.
              <br />
                Lets make a healthy community
                
              </p>
            </div>

          </div>
          <div className="card">

            <div className="imgs">
              <i class="fa-solid fa-clock-rotate-left" style={{ fontSize: '50px' }}> 24*7</i>
            </div>
            <div className="text">
              <h3>
                24*7 Service
              </h3>
             <p> We Provide 24*7 Service <br />
                so you can get at your convinient time
              </p>
            </div>

          </div>
          
      

        <div className="sidecons">

          </div>
        </div>
        

      </div>
      
      <div className="services">
        <Services/>
      </div>
      <Videoplayer/>
    </div>
  )
}

export default Homecontent