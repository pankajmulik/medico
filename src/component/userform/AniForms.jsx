import React, { useEffect, useState } from 'react'
import '../home/Homecon.css'
import { useSpring, useSpringRef, animated, useTransition, } from '@react-spring/web'

const AniForms = () => {

    const [issubmit, setissubmit] = useState(false)



    const handleclick = () => {
    setissubmit(true)
}
    

    



   


    const [name, setname] = useState(null)
    const [email, setemail] = useState(null)
    const [mNo, setmNo] = useState(null)

    {
        if (issubmit) {
            return (
                <div style={{textAlign:'center'}}>
                    
                    <h1> 
                        Thank You {name}  
                        


                    </h1>


                    <br /> <br />
                    
                    <h3>Our Executive get in touch with you regarding the appointment  schedule</h3>

                    
                    

                    <div className="appointmentedit">
                        Cancel Appointment

                        <button> click here</button>
                    </div>

                    <div className="appointmentedit">
                        Reschedule Appointment
                        <button> click here</button></div>

                    
                    


                </div>
            )
        }
    }

    {
        if (!issubmit) {
            return (
                <div id='anifrm'>

                  

                    
                        <div>
                            <p style={{ fontSize: '14px' }}>
                                Fill the details below so we our Executive <br /> get in touch with you for bool an appointment!
                            </p>
                        </div>

                        <form action="#">
                            <div>
                                <label htmlFor="name">Name:</label>
                                <br />
                                <input type="text" name="uname" id="uname" placeholder='Enter you name' value={name}
                                onChange={((e)=>{setname(e.target.value)})}
                                />
                            </div>
                            <div>
                                <label htmlFor="uemail">Email :</label>
                                <br />
                            <input type="email" name="uemail" id="uemail" placeholder='Enter Email ' value={email}
                            onChange={((e)=>{setemail(e.target.value)})}
                                
                            />
                            </div>

                            <div>
                                <label htmlFor="
                 number">Contact No.</label> <br />

                            <input type="text" name="unumber" id="unumber" placeholder='Mobile no' value={mNo}
                            
                                onChange={((e)=>{setmNo(e.target.value)})}
                            />
                            </div>

                            <div id='subbtndiv'>
                                <button type="submit" id='subbtn' onClick={handleclick}>Submit</button>
                            </div>

                        </form>
                   

                </div>
            )
        }

    }

}

export default AniForms