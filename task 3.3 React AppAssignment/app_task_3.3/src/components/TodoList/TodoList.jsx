import React from 'react';
import styles from './TodoList.module.css'
import {useSelector} from "react-redux";

const TodoList = () => {

    const lists = useSelector(state => state.lists.lists);

    return (
        <div className={styles.todoList}>
            {lists.length > 0 ?
                <div>
                    {lists.map((list) =>
                        <div key={list.id}>{list.name}</div>
                    )}
                </div>
                :
                <div>No posts</div>
            }
        </div>
    );
};

export default TodoList;