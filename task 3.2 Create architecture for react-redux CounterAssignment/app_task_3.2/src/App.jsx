import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./actions/actions";

function App() {

    const dispatch = useDispatch();
    const count = useSelector(state => state.count)

    const  onDecrement = () =>{
        dispatch(increment())
    }

    const  onIncrement = () =>{
        dispatch(decrement())
    }


    return (
        <div className="container">
            <p>Functional component</p>
            <div className="counter">
                <button onClick={onDecrement}>-</button>
                <div className="count">{count}</div>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );

}

export default App;
