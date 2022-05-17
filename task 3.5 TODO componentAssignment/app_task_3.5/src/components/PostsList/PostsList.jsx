import React, { useEffect } from "react";
import styles from "./PostsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../asyncActions/posts";

const PostsList = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (!posts.length) return <div className={styles.postList}>No posts</div>;

  return (
    <div className={styles.postList}>
      <div>
        {posts.map((post) => (
          <div key={"post_" + post.id}> Post: {post.title}</div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;