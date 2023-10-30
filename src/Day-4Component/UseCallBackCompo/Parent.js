import React, { useCallback, useState } from 'react'
import Child from './Child';

function Parent() {
    const[data,setData]=useState(0);
    const[count,setCount]=useState(0)
    // function IncrementFunc(){
    //     setData(data+10)
    // }

    const IncrementFunc=useCallback(()=>{
      setData(data+10)
    },[data])
  return (
    <div>
        <Child send={IncrementFunc}/>
      <h1>Data:{data}</h1>
      <button onClick={()=>setData(data+1)}>DataBtn</button>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count-5)}>CountBtn</button>
    </div>
  )
}

export default Parent
