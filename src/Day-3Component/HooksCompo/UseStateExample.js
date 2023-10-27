import React, { useState } from 'react'

function UseStateExample() {
    const[count,setCount]=useState(1);
  return (
    <div>
      <h1>Multiply Value:{count}</h1>
      <button onClick={()=>setCount(count*2)}>MultiplyBtn</button>
    </div>
  )
}

export default UseStateExample
