import React, { useRef, useState } from 'react'
import  ReactPlayer  from 'react-player'
import './style/Vstyle.css'
const Videoplayer = () => {

    const [isPlaying, setisPlaying]=useState(false)
    const playerref = useRef(null)
    
    const handlePlayPause = () => {
        setisPlaying(!isPlaying);
    };
  return (
      <div id='vplay'>
          
          <ReactPlayer
          
              url='/video/pexels-thirdman-5426204 (1080p).mp4'
              controls={true}
              
           
              playIcon={true}
          
          >
          </ReactPlayer>

          
            

          
         
          <div style={{textAlign:'center',padding:'5%'}}>
              <h1 style={{color:'aquamarine'}}>
              Watch a demo you will get a bit overview of our services <br />
                  thank you
                  

              </h1>
</div>
    </div>
  )
}

export default Videoplayer