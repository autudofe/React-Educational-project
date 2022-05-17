import React, { useEffect, useState } from "react";
import UsersServices from "../../../../API/UsersServices";
import styles from "./Posts.module.css";

const Posts = ({ id }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    new UsersServices().getUserPosts(id).then((r) => setPosts(r.data));
  }, [id]);
  if (!posts.length) return <div>Loading...</div>;
  return (
    <div>
      {posts.map((post, index) => (
        <div key={post.userId + post.id} className={styles.postRow}>
          <div className={styles.postRowHead}>
            {post.id + ". "}
            {post.title}
          </div>
          <div className={styles.postRowText}> {post.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
