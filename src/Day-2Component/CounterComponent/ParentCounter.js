import React, { Component } from 'react'
import ChildCounter from './ChildCounter';

class ParentCounter extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
  render() {
    return (
      <>
        <ChildCounter value={this.state.count} />
      </>
    )
  }
}
export default ParentCounter;
