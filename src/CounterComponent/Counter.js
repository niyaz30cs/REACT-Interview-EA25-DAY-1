import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0);
  return (
    <>
      <h1>Counter Value:{count}</h1>
      <button onClick={()=>setCount(count+1)}>CountBtn</button>
    </>
  )
}

export default Counter
