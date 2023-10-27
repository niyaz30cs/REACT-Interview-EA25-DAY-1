import React, { useEffect, useState } from 'react'
import axios from "axios"
function ApiData() {
    const[user,setUser]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUser(res.data))
        .catch((err)=>console.log(err))
    },[])
    console.log(user);
  return (
    <>
      {user.map((value,index)=>{
        return(
            <div key={index}>
                <h2>Name:{value.name}</h2>
                <h2>UserName:{value.username}</h2>
            </div>
        )
      })}
    </>
  )
}

export default ApiData
