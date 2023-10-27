import React, { Component } from 'react'

class ChildCompo extends Component {
  render() {
    return (
      <>
        <h1>My Name is :{this.props.value} </h1>
      </>
    )
  }
}
export default ChildCompo;
