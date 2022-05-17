import React from 'react';
import styles from './PostsList.module.css'
import {useSelector} from "react-redux";

const PostsList = () => {

    const posts = useSelector(state => state.posts.posts);

    return (
        <div className={styles.postList}>
            {posts.length > 0 ?
                <div>
                    {posts.map((post) =>
                        <div key={post.id}>{post.name}</div>
                    )}
                </div>
                :
                <div>No posts</div>
            }
        </div>
    );
};

export default PostsList;