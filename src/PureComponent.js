import React from "react";

class PureComponent extends React.PureComponent{
    render() {
        console.log('pure component');
        return(
            <>
                <h1>Pure Component</h1>
                <span>It's mean if data same then don't render otherwise render.</span>
                <h2>Count: {this.props.data}</h2>
            </>
        )
    }
}

export default PureComponent;