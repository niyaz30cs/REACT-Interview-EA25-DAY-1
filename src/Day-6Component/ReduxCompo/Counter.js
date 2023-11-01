import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addition, division, multiply, substrat } from './Slice'

function Counter() {
    const useData = useSelector((state) => state.number.value)

    const dispatch = useDispatch()

    const addFunc = () => {
        dispatch(addition())
    }
    const subFunc = () => {
        dispatch(substrat())
    }
    const mulFunc = () => {
        dispatch(multiply())
    }
    const divFunc = () => {
        dispatch(division())
    }
    return (
        <>
            <h1>Redux Example Component....</h1>
            <h1>Counter:{useData}</h1>
            <button onClick={addFunc}>Addition</button>
            <button onClick={subFunc}>Substract</button>
            <button onClick={mulFunc}>Multiply</button>
            <button onClick={divFunc}>Division</button>
        </>
    )
}

export default Counter
