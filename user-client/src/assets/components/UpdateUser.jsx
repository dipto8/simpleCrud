import React from 'react'
import { useLoaderData } from 'react-router-dom'

function UpdateUser() {
  const users  = useLoaderData()
  console.log(users.age)
  return (
    <div>
        <h1>UPDATE USER {users.age}</h1>

        
      
    </div>
  )
}

export default UpdateUser
