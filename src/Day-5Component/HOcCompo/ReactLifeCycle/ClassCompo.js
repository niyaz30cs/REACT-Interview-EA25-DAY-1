import React, { Component } from 'react'
import Child from './Child';

class ClassCompo extends Component {
    constructor() {
        super();
        console.log("This Constructor-1");
        this.state = {
            count: 0,
            change: true
        }
    }
    componentDidMount() {
        console.log("This ComponentDidMount-3");
    }
    render() {
        console.log("This Render-2");
        return (
            <>
                <h1>Count Value:{this.state.count}</h1>
                <Child data={this.state.count} />
                {this.state.change ? <UnMountData /> : ""}
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>CountBtn</button>
                <button onClick={() => this.setState({ change: !this.state.change })}>Toggle</button>
            </>
        )
    }
}
export default ClassCompo

class UnMountData extends Component {
    componentWillUnmount() {
        alert("This is UnMounting Component Data")
    }
    render() {
        return (
            <>
                <h1>This is UnMountData Component..</h1>
            </>
        )
    }
}


