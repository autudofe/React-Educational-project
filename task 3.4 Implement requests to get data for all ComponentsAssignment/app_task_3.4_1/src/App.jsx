import './App.css';

import {Route, Routes, Navigate} from "react-router-dom";

import React from "react";
import PostsList from "./components/PostsList/PostsList";
import UserList from "./components/UserList/UserList";
import TodoList from "./components/TodoList/TodoList";
import Navigation from "./components/Navigation";





function App() {

    return (
            <div className="container">
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/postsList" />} />
                    <Route path="/postsList" element={<PostsList />}/>
                    <Route path="/userList" element={<UserList />}/>
                    <Route path="/todoList" element={<TodoList />}/>
                </Routes>
            </div>
    );

}

export default App;
