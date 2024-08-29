import React, { useCallback, useContext } from 'react'
import { myContext } from '../App' 

const UserDetails = () => {
  const data = useContext(myContext)
  return (
    <div>Name : {data.name}</div>
  )
}

export default UserDetails