import React, { useRef } from 'react'

function UseRefCompo() {
    const inputRef=useRef(null)
    console.log(inputRef);

    function getData(){
        console.log(inputRef.current.value);
        inputRef.current.focus();
        inputRef.current.style.background="pink";
    }
  return (
    <>
      <input type='text' placeholder='Write Something Here' ref={inputRef} />
      <button onClick={getData}>Button</button>
    </>
  )
}

export default UseRefCompo
