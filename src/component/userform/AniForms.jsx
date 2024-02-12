import React, { useEffect } from 'react'
import '../home/Homecon.css'
import { useSpring, useSpringRef, animated, useTransition, } from '@react-spring/web'

const AniForms = () => {
    const api = useSpringRef()
    const springs = useSpring({
        ref: api,
        from: { x: 100 }

    })

    const handleClick = () => {
        api.start({
         

            to: {

                x: springs.x.get() ===0 ?100: 0,
            },
        })
    }

    

    useEffect(() => {
        handleClick();
    })
  return (
      <div id='anifrm'>
          
          <animated.div 
              
              style={{
                  width: '100%',
                  height: 'fit-content',
                  
                  backgroundColor: 'white',
                  ...springs
              }}
        
          >
              <div>
                  <p style={{ fontSize: '14px' }}>
                      Fill the details below so we our Executive <br /> get in touch with you for bool an appointment!
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
          </animated.div>

    </div>
  )
}

export default AniForms