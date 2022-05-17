import {addAllUsers} from "../reducers/actions/actions";

export  const fetchUsers = () => {
    return dispatch => {
        fetch(process.env.REACT_APP_API_URL_USERS)
            .then(response => response.json())
            .then(json => dispatch(addAllUsers(json)))
    }
}