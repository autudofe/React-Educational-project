import React from 'react';
import styles from './Navigation.module.css'
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? `${styles.activeLink} ${styles.navigationBlock}` : styles.navigationBlock

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <NavLink to="/postsList" className={setActive}>PostsList</NavLink>
            <NavLink to="/userList" className={setActive}>UserList</NavLink>
            <NavLink to="/todoList" className={setActive}>TodoList</NavLink>
        </div>
    );
};

export default Navigation;