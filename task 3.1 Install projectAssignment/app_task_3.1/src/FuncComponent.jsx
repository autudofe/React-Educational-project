import './App.css';
import React, {useState} from "react";

const FuncComponent = () => {

    const count = 0;

    const [amount, setAmount] = useState(count);


    const onIncrement = () =>{
        setAmount(amount + 1)
    }
    const onDecrement = () =>{
        setAmount(amount - 1)
    }


    return (
        <div className="container">
            <p>Functional component</p>
            <div className="counter">
                <button onClick={onDecrement}>-</button>
                <div className="count">{amount}</div>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}

export default FuncComponent;
