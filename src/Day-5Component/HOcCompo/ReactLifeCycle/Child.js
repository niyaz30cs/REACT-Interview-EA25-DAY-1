import React, { Component } from 'react'

class Child extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.data);
        console.log(this.props.data);
        if (prevProps.data !== this.props.data) {
            console.log("state is update in parent");
        }

    }
    render() {
        return (
            <>
                <h1>Child Component...</h1>
            </>
        )
    }
}
export default Child;