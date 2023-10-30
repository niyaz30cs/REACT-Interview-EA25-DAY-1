import React, { useReducer, useState } from 'react'

const initialState = {
    balance: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case "deposite":
            return { balance: state.balance + action.amount }

        case "withdraw":
            return { balance: state.balance - action.amount }
        default:
            return state.balance;
    }
}
    function UseReducerCompo() {
        const [state, dispatch] = useReducer(reducer, initialState);
        const [amount, setAmount] = useState(0);

        const handleDeposite = () => {
            dispatch({ type: "deposite", amount: parseInt(amount) })
        }
        const handleWithdraw = () => {
            dispatch({ type: "withdraw", amount: parseInt(amount) })
        }
        return (
            <>
                <h1>Balance:{state.balance}</h1>
                <input type='number' placeholder='enter amount' name='amount' onChange={(e) => setAmount(e.target.value)} />
                <button onClick={handleDeposite}>Deposite</button>
                <button onClick={handleWithdraw}>Withdraw</button>
            </>
        )
    }
    export default UseReducerCompo;
