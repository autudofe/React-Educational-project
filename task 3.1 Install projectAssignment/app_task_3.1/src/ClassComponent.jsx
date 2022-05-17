import './App.css';
import React from "react";

class ClassComponent extends React.Component {
    state = {
        count: 0
    };

    increment = () => {
        this.setState(state => (
            {...state, count: state.count + 1}
        ))
    }

    decrement = () => {
        this.setState(state => (
            {...state, count: state.count - 1}
        ))
    }


    render() {
        return (
            <div className="container">
                <p>Class component</p>
                <div className="counter">
                    <button onClick={this.decrement}>-</button>
                    <div className="count">{this.state.count}</div>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
}

export default ClassComponent;