import React, { useEffect, useState } from "react";
import styles from "./PostsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../asyncActions/posts";
import Post from "./Post/Post";
import AddPostForm from "./Form/AddPostForm";

const PostsList = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (!posts.length) return <div className={styles.postList}>No posts</div>;

  return (
    <div className={styles.postList}>
      <div>
        <AddPostForm visible={visible} setVisible={setVisible} />
        <button
          className={styles.addPostButton}
          onClick={() => setVisible(true)}
        >
          Add Post
        </button>
        {posts.map((post) => (
          <Post key={"post_" + post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
