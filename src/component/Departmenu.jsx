import React from 'react'
import depds from './dpdatas'
import Deptitem from './Deptitem'

import './home/Homecon.css'
const Departmenu = () => {
  return (
      <div id='deptsmenus'>
          
          {
              
              depds.map((depe) => {
                 return <Deptitem item={depe} ></Deptitem>
              })

}


    </div>
  )
}

export default Departmenu