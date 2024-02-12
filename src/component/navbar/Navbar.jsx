import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import {useSpring,animated} from '@react-spring/web'


const Navbar = () => {
const [istogle, setistogle]=useState(false)
    const handlebar = () => {
        setistogle(!istogle)
    }





    return (


        <div id='Navbar'>

            <div className="navcon">

                
               
                    
               <div className="navldiv">
                    <div className="nlogodiv" >
                        
                      

                            <NavLink to='/'>

                            <img src="https://media.istockphoto.com/id/1312665318/vector/medical-logo-design-vector.jpg?s=2048x2048&w=is&k=20&c=mG83Z1cyUhDSes1z3nO45CBkuMPqwz2sEC7____MYnM="
                                alt="logo"  id='clogo'/>
                            </NavLink>

                        </div>
                       
                </div>
                
                <div className="navmenu">


                        


                           <div className="nmenut">
                            <NavLink to='/about'>

                                <button className='nbtm'>
                                    About
                                </button>

                            </NavLink>
                           </div>

                           <div className="nmenut">
                            <NavLink to='/services'>
                                <button className='nbtm'>

                                    Services
                                </button>

                            </NavLink>
                           </div>
                            <div className="nmenut">
                            <NavLink to='/review'>
                                <button className='nbtm'>
                              Reviews
                                </button>

                            </NavLink>
                          </div>
                           <div className="nmenut">
                            <NavLink to='/locations'>
                                <button className='nbtm'>
                                Locations
                                </button>

                            </NavLink>
                         </div>
                        
                      
              
                    <div className="contact">
                       <p>9832732828</p>
                    <p>Email: xyzs@gmail.com</p> 
              
                    </div>
                     </div>


               
                


                </div>
            <div className="Navbbar">
            <div className="rightmenu">

                <div className="navldiv">
                    <div className="nlogodiv">



                        <NavLink to='/'>

                            <img src="https://media.istockphoto.com/id/1312665318/vector/medical-logo-design-vector.jpg?s=2048x2048&w=is&k=20&c=mG83Z1cyUhDSes1z3nO45CBkuMPqwz2sEC7____MYnM="
                                alt="logo" id='clogo' />
                        </NavLink>
                            

                    </div>
                </div>

            </div>
                <div className="bars" >
                   
                    <i class="fa-solid fa-bars" onClick={handlebar}></i>
                    

                    <div >
                        {istogle ? <div style={{ width: '100%' }} id='rbbt'>
                            
                            <div className="rghtmenu">
                                <div className='rbtnsn'>
                                    <NavLink to='/about'>

                                        <button className='rbtnsn'>
                                            About
                                        </button>

                                    </NavLink>
                                   
                                </div>
                                <div>

                                    <NavLink to='/services'>

                                        <button className='rbtnsn'>

                                            Services
                                        </button>

                                    </NavLink>

                                </div>
                                <div>
                                    <NavLink to='/review'>
                                        <button className='rbtnsn'>
                                            Reviews
                                        </button>

                                    </NavLink>
                                    
                                </div>
                                <div>
                                    <NavLink to='/locations'>
                                        <button className='rbtnsn'>
                                            Locations
                                        </button>

                                    </NavLink>
                                    
                                </div>
                                
</div>

                        </div>:false }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar