import {
  ADD_ALL_POSTS,
  ADD_ALL_TODOS,
  ADD_ALL_USERS,
  ADD_POST,
  MODIFY_TODO_CHECKBOX,
} from "./types";

export const addAllUsers = (payload) => ({ type: ADD_ALL_USERS, payload });
export const addAllPosts = (payload) => ({ type: ADD_ALL_POSTS, payload });
export const addPost = (payload) => ({ type: ADD_POST, payload });
export const addAllTodos = (payload) => ({ type: ADD_ALL_TODOS, payload });
export const modifyTodoCheckbox = (payload) => ({
  type: MODIFY_TODO_CHECKBOX,
  payload,
});
