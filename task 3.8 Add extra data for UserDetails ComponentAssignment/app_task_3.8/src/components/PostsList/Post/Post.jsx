import React from "react";
import "./Post.css";
const Post = (promise) => {
  const { title, body } = promise.post;
  return (
    <div className="post">
      <div className="title"> Title: {title}</div>
      <div className="body"> Post: {body}</div>
    </div>
  );
};

export default Post;
