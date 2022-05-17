import { addAllTodos } from "../../reducers/actions/actions";

export const fetchTodos = () => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL_BASE}/todos`)
      .then((response) => response.json())
      .then((json) => dispatch(addAllTodos(json)));
  };
};
