import React, { Component } from 'react'
import ChildCompo from './ChildCompo';

class ParentCompo extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Niyaz Alam"
        }
    }
  render() {
    return (
      <>
        <ChildCompo value={this.state.name}/>
      </>
    )
  }
}
export default ParentCompo;
