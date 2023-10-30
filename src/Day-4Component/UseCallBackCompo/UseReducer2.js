import React, { useReducer, useState } from 'react'

const initialState={
    balance:0
}

const reducer=(state,action)=>{
     switch(action.type){
          case "deposite":
            return{balance:state.balance+action.amount}
          case "withdraw":
            return {balance:state.balance-action.amount}
          default:
            return state.balance   
     }
}

function UseReducer2() {
    const[value,dispatch]=useReducer(reducer,initialState);
    const[amount,setAmount]=useState(0);
    
    const handleDep=()=>{
        dispatch({type:"deposite",amount:parseInt(amount)})
    }
    const handleWithdraw=()=>{
        dispatch({type:"withdraw",amount:parseInt(amount)})
    }

  return (
    <>
      <h1>Amount:{value.balance}</h1>
      <input type='number' name='amount' placeholder='Enter Amount' onChange={(e)=>setAmount(e.target.value)} />
      <button onClick={handleDep}>DepositeBtn</button>
      <button onClick={handleWithdraw}>WithdrawBtn</button>
    </>
  )
}

export default UseReducer2
