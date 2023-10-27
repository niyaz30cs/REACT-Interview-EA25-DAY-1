import React, { Component } from 'react'

class ChildCounter extends Component {
    constructor(props){
        super(props);
        this.state={
            coutNum:this.props.value
        }
    }
  render() {
    return (
      <>
      <h1>Counter Value:{this.state.coutNum}</h1>
        <button onClick={()=>this.setState({coutNum:this.state.coutNum+1})}>Increment</button>
      </>
    )
  }
}
export default ChildCounter;
