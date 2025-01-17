import React from "react";

class Student extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>I am a wonderful learner student.</h1>
                <h1> {this.props.name} </h1>
                <h1> {this.props.email} </h1>
                <h1> {this.props.phone} </h1>
            </div>
        )
    }
}

export default Student;