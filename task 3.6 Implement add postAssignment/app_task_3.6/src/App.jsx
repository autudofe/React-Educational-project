import "./App.css";

import { Route, Routes, Navigate } from "react-router-dom";

import React from "react";

import Navigation from "./components/Navigation";
import PostsList from "./components/PostsList";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/postsList" />} />
        <Route path="/postsList" element={<PostsList />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/todoList" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
