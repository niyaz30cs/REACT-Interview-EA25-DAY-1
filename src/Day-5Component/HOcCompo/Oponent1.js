import React from 'react'
import HocCompo from './HocCompo'

function Oponent1(props) {
    // const[bidding,setBidding]=useState(1)
    return (
        <div>
            <h1>Amount for bidding player 1:${props.auction}</h1>
            <button onClick={props.handleAuction}>Oponent1Btn</button>
        </div>
    )
}

export default HocCompo(Oponent1);
