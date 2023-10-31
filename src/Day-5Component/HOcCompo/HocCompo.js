import React, { useState } from "react";

const HocCompo = (BiddingData) => {
    const BiddingFunc = () => {
        const [auction, setAuction] = useState(1)

        const handleAuction = () => {
            setAuction(auction * 2);
        }
        return (
            <BiddingData auction={auction} handleAuction={handleAuction} />
        )
    }
    return BiddingFunc;

}
export default HocCompo;