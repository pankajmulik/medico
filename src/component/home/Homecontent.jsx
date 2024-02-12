import React, {useEffect} from 'react'
import './Homecon.css'
import Services from '../services/Services'
import Videoplayer from '../Videoplayer'
import { animated, useSpring } from '@react-spring/web';
import Animate from '../animation/Animate';
import AniForms from '../userform/AniForms';
import AnimatedNav from '../navbar/AnimatedNav';
import AOS from "aos";
import "aos/dist/aos.css";



const Homecontent = () => {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div id='Homecontent'>
      <div className="confirst-home">
      <div className="homeconone">
        <div className="onecon">

          <div className="sidecon">

          </div>
            <div className="cononetext">
              
              <Animate />

           

              <p id='conpara' >
                <animateMotion >
              With Best Medical staff <br /> a
            Equiped with latest machinery <br />
                  We offer better Treatment
                  </animateMotion>
            </p>


          </div>
          <div className="imgscon">

            <img src="https://media.istockphoto.com/id/1344622271/photo/family-portrait.jpg?s=612x612&w=0&k=20&c=2a_6tktGhkiG_pm7PFQ8-x5sJAF2PBQrdtTO0u-MhPc="
              alt="family pic" id='familypic'/>
          </div>

          </div>
        

        <div className="contactform">

          <div className="form-heading">
            <h2>Book An Appointment!</h2>
          </div>

          <div className="form-control">

            
              
              <AniForms/>
            {/* <form action="#" method="post">
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

            </form> */}
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

          
          
          <div className="card" data-aos="fade-down-right">

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
          <div className="card" data-aos="fade-up" data-aos-delay="100">

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
          <div className="card" data-aos="fade-down-left" data-aos-delay="100">

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