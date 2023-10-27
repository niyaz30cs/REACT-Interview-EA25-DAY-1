import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id}=useParams();
    console.log(id);
  return (
    <div>
      <h1>This is User Page</h1>
      <h2>This is User:-{id}</h2>
    </div>
  )
}

export default User
