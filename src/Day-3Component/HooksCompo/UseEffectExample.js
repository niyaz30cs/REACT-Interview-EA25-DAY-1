import React, { useEffect, useState } from 'react'

function UseEffectExample() {
    const[mouseCode,setMouseCode]=useState({x:0,y:0})
    const mouseMoving=(event)=>{
        setMouseCode({
            x:event.clientX,
            y:event.clientY
        })
    }
    useEffect(()=>{
        window.addEventListener("mousemove",mouseMoving);
        console.log(mouseCode.x,mouseCode.y);

        return(()=>{
           window.removeEventListener("mousemove",mouseMoving);
        })

    },[mouseCode])
  return (
    <>
    <h1>This is useEffect Component..</h1>
      <h2>X:{mouseCode.x} | Y: {mouseCode.y}</h2>
    </>
  )
}

export default UseEffectExample
