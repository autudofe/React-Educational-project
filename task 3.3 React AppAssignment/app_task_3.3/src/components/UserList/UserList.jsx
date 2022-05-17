import React from 'react';
import styles from './UserList.module.css'
import {useSelector} from "react-redux";

const UserList = () => {

    const users = useSelector(state => state.users.users);

    return (
        <div className={styles.userList}>
            {users.length > 0 ?
                <div>
                    {users.map((user) =>
                        <div key={user.id}>{user.name}</div>
                    )}
                </div>
                :
                <div>No users</div>
            }

        </div>
    );
};

export default UserList;