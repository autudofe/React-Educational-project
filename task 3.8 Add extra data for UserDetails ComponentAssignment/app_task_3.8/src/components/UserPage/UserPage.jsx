import React, { useEffect, useState } from "react";
import "./UserPage.module.css";
import { Navigate, NavLink, Route, Routes, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";
import styles from "./UserPage.module.css";
import Albums from "./UserDetails/Albums";
import Posts from "./UserDetails/Posts";
import Todos from "./UserDetails/Todos";
import UserInfo from "./UserDetails/UserInfo";
import UsersServices from "../../API/UsersServices";

const setActive = ({ isActive }) =>
  classNames(
    styles.buttonPageInfo,
    styles.color,
    isActive && styles.activeLink
  );

const UserPage = () => {
  const id = useParams().id;

  const [user, setUser] = useState({});

  useEffect(() => {
    new UsersServices().getUserInfo(id).then((r) => setUser(r.data));
  }, []);

  if (!Object.keys(user).length) return <div>Loading...</div>;
  return (
    <div className={styles.userPage}>
      <h3 className={styles.userName}>{user.name}</h3>

      <div className={styles.buttonsPageInfo}>
        <NavLink to={`/UserPage/${id}/userInfo`} className={setActive}>
          user info
        </NavLink>
        <NavLink to={`/UserPage/${id}/albums`} className={setActive}>
          albums
        </NavLink>
        <NavLink to={`/UserPage/${id}/todos`} className={setActive}>
          todos
        </NavLink>
        <NavLink to={`/UserPage/${id}/posts`} className={setActive}>
          posts
        </NavLink>
      </div>

      <Routes>
        <Route path={`/userInfo`} element={<UserInfo user={user} />} />
        <Route path={`/albums`} element={<Albums id={id} />} />
        <Route path={`/posts`} element={<Posts id={id} />} />
        <Route path={`/todos`} element={<Todos id={id} />} />
      </Routes>
    </div>
  );
};

export default UserPage;
