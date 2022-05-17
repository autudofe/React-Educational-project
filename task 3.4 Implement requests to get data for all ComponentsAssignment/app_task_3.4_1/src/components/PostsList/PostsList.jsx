import React, {useEffect} from 'react';
import styles from './PostsList.module.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../asyncActions/posts";

const PostsList = () => {

    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

    return (
        <div className={styles.postList}>
            {posts.length > 0 ?
                <div>
                    {posts.map((post) =>
                        <div key={'post_' + post.id}> Post: {post.title}</div>
                    )}
                </div>
                :
                <div>No posts</div>
            }
        </div>
    );
};

export default PostsList;