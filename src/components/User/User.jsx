import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-center text-white p-4 font-bold'>User:{userid} </div>
  )
}

export default User