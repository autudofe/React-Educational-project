import { ADD_ALL_USERS } from "./actions/types";

const defaultState = {
  users: [
    { name: "Nikita", id: 1 },
    { name: "Denis", id: 2 },
    { name: "Petro", id: 3 },
  ],
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ALL_USERS:
      return { ...state, users: [...action.payload] };
    default:
      return state;
  }
};