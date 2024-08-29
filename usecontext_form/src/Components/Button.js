import React, { useContext } from 'react'
import { myContext } from '../App'

const Button = () => {
  const data = useContext(myContext);
  return (
    <div style={{backgroundColor:data.color, width:50, color:"white", marginTop:10}}> Button </div>
  )
}

export default Button