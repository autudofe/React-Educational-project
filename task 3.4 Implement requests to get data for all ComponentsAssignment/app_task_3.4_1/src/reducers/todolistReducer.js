import {ADD_ALL_TODOS} from "./actions/types";

const defaultState = {
    lists: [{title: 'List 1', id: 7, completed:true}, {title: 'List 2', id: 8, completed:false}, {title: 'List 3', id: 9, completed:true}],
}

export const todolistReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case ADD_ALL_TODOS :
            return {...state, lists: [...action.payload]};
        default:
            return state;
    }
};