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
              light={<img src='https://media.istockphoto.com/id/1437830105/photo/cropped-shot-of-a-female-nurse-hold-her-senior-patients-hand-giving-support-doctor-helping.jpg?s=2048x2048&w=is&k=20&c=dcWhDDz8ikGpUMEkP6sUJ81lgUQDg_Vnmv7mfGeLAoo=' alt='Thumbnail' style={{width:'inherit'}} onClick={handlePlayPause}/>} 
              url='/video/pexels-thirdman-5426204 (1080p).mp4'
              controls={ playerref}
              
           
              playing={true}
              width={'100%'}
          
          >
              
              <button id='pbt'>Play</button>
              
          </ReactPlayer>

          
            

          
         
          <div  id='vtexts'>
              <h1 style={{color:'aquamarine'}} >
              Watch a demo you will get a bit overview of our services <br />
                  thank you
                  

              </h1>
</div>
    </div>
  )
}

export default Videoplayer