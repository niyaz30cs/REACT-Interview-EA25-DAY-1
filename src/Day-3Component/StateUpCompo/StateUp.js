import React, { useState } from 'react'
import Home from './Home'

function StateUp() {
    const [childName, setChildName] = useState("")
    const getFunction = (data) => {
        console.log(data);
        setChildName(data)
    }
    return (
        <div>
            <h1>Parent:{childName}</h1>
            <Home getData={getFunction} send="Niyaz Alam" />
        </div>
    )
}

export default StateUp
