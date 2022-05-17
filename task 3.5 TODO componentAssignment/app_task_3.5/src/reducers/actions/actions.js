import {ADD_ALL_POSTS, ADD_ALL_TODOS, ADD_ALL_USERS, MODIFY_TODO_CHECKBOX} from "./types";

export const addAllUsers = (payload) =>({type:ADD_ALL_USERS, payload});
export const addAllPosts = (payload) =>({type:ADD_ALL_POSTS, payload});
export const addAllTodos = (payload) =>({type:ADD_ALL_TODOS, payload});
export const modifyTodoCheckbox = (payload) =>({type:MODIFY_TODO_CHECKBOX, payload});