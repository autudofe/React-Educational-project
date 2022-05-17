import { ADD_ALL_TODOS, MODIFY_TODO_CHECKBOX } from "./actions/types";

const defaultState = {
  list: [
    { title: "List 1", id: 7, completed: true },
    { title: "List 2", id: 8, completed: false },
    {
      title: "List 3",
      id: 9,
      completed: true,
    },
  ],
};

export const todolistReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ALL_TODOS:
      return { ...state, list: [...action.payload] };

    case MODIFY_TODO_CHECKBOX:
      return {
        ...state,
        list: [
          ...state.list.map((todoItem) =>
            todoItem.id === action.payload.id
              ? {
                  ...todoItem,
                  completed: action.payload.checked,
                }
              : todoItem
          ),
        ],
      };

    default:
      return state;
  }
};
