import React from 'react'

import { useSpring, useSpringRef, animated, useTransition, } from '@react-spring/web'
import './Navbar.css'

const AnimatedNav = () => {

    const [transitions] = useTransition({
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 1 },
    })

  return (
      <div>
          
              <div className="card">
              <animated.div style={transitions}>
                  <div className="imgs">
                      <i class="fa-solid fa-user-doctor" style={{ fontSize: '50px', }}></i>
                  </div>
                  <div className="text" >
                      <h3>Professional doctors</h3>
                      <p>Best Doctors at your service
                          <br />
                          Our Surgens are among top dcoctor <br />
                          in india.
                      </p>
                  </div>
              </animated.div>
              </div>
              <div className="card">

                  <div className="imgs"><i class="fa-solid fa-people-group" style={{ fontSize: '50px' }}></i>
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

       
          
          
    </div>
  )
}

export default AnimatedNav