import {addAllPosts} from "../reducers/actions/actions";

export  const fetchPosts = () => {
    return dispatch => {
        fetch(process.env.REACT_APP_API_URL_POSTS)
            .then(response => response.json())
            .then(json => dispatch(addAllPosts(json)))
    }
}