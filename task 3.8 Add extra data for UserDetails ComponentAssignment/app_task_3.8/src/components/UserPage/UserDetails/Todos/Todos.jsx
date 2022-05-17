import React, { useEffect, useState } from "react";
import styles from "./Todos.module.css";
import UsersServices from "../../../../API/UsersServices";
import classNames from "classnames";

const Todos = ({ id }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    new UsersServices().getUserTodos(id).then((r) => setTodos(r.data));
  }, [id]);

  const handleChange = (e) => {
    const { id, checked } = e.target;

    setTodos(
      todos.map((todo) =>
        todo.id === +id ? { ...todo, completed: checked } : todo
      )
    );
  };

  if (!todos.length) return <div>Loading...</div>;
  return (
    <div>
      {todos.map((todo) => (
        <div className={styles.todoRow} key={"list_" + todo.id}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={todo.completed}
            onChange={handleChange}
            id={todo.id}
          />
          <label
            className={classNames(
              styles.title,
              { [styles.active]: todo.completed },
              { [styles.notActive]: !todo.completed }
            )}
          >
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Todos;
