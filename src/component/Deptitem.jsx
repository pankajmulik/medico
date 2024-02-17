import React from 'react'
import './home/Homecon.css'
const Deptitem = (props) => {

console.log(props)
  return (
      <div className="depti" >
          <h3>
           {props.item.dept}
      </h3>
      
      <h4>
        {
          props.item.name
        }
      </h4>
  </div>
  )
}

export default Deptitem