import {DECREMENT, INCREMENT} from "../actions/types";

const defaultState = {
    count : 0,
}

export const cashReducer =(state = defaultState, action) =>{
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1};

        case DECREMENT:
            return {...state, count: state.count - 1};

        default:
            return state
    }
}