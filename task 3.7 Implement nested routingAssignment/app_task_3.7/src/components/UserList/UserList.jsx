import React, { useEffect } from "react";
import styles from "./UserList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../asyncActions/users";
import { useHistory, useNavigate } from "react-router-dom";

const UserList = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (!users.length) return <div className={styles.userList}>No users</div>;

  return (
    <div className={styles.userList}>
      <div>
        {users.map((user) => {
          return (
            <div
              className={styles.table}
              key={"user_" + user.id}
              onClick={() => navigate(`/UserPageInfo/${user.id}`)}
            >
              <div className={styles.cellTable}>User Name: {user.username}</div>
              <div className={styles.cellTable}>Name: {user.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
