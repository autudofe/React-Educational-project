import { ADD_ALL_POSTS } from "./actions/types";

const defaultState = {
  posts: [
    { title: "Post 1", id: 4 },
    { title: "Post 2", id: 5 },
    { title: "Post 3", id: 6 },
  ],
};

export const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ALL_POSTS:
      return { ...state, posts: [...action.payload] };
    default:
      return state;
  }
};