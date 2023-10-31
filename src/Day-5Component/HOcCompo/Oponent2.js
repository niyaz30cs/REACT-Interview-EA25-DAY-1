import React from 'react'
import HocCompo from './HocCompo'

function Oponent2(props) {
    // const[bidding,setBidding]=useState(1)
    return (
        <div>
            <h1>Amount for bidding player 2:${props.auction}</h1>
            <button onClick={props.handleAuction}>Oponent2Btn</button>
        </div>
    )
}

export default HocCompo(Oponent2)
