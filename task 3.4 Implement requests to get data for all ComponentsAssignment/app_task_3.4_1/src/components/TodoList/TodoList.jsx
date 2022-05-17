import React, {useEffect} from 'react';
import styles from './TodoList.module.css'
import {useDispatch, useSelector} from "react-redux";

import {fetchTodos} from "../../asyncActions/todos";

const TodoList = () => {

    const lists = useSelector(state => state.lists.lists);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [])

    return (
        <div className={styles.todoList}>
            {lists.length > 0 ?
                <div>
                    {lists.map((list) => {
                            return (
                                <div key={'list_' + list.id}>
                                    <input type="checkbox"  checked={list.completed} disabled/><label>  {list.id}.
                                    Title: {list.title}</label>
                                </div>
                            )
                        }
                    )}
                </div>
                :
                <div>No posts</div>
            }
        </div>
    );
};

export default TodoList;