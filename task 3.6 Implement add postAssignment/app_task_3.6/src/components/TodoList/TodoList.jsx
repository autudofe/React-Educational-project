import React, { useEffect } from "react";
import styles from "./TodoList.module.css";
import { useDispatch, useSelector } from "react-redux";

import { fetchTodos } from "../../asyncActions/todos";
import { modifyTodoCheckbox } from "../../reducers/actions/actions";

const TodoList = () => {
  const lists = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const handleChange = (e) => {
    const { id, checked } = e.target;
    console.log(typeof id);

    dispatch(modifyTodoCheckbox({ id: +id, checked }));
  };

  if (!lists.length) return <div className={styles.todoList}>No posts</div>;

  return (
    <div className={styles.todoList}>
      <div>
        {lists.map((list) => {
          return (
            <div key={"list_" + list.id}>
              <input
                type="checkbox"
                checked={list.completed}
                onChange={handleChange}
                id={list.id}
              />
              <label>
                {" "}
                {list.id}. Title: {list.title}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
