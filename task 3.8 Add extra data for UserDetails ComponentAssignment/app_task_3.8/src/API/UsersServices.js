import axios from "axios";

export default class UsersServices {
   async getUserInfo(id) {
    try {
      return await axios.get(`${process.env.REACT_APP_API_URL_BASE}/users/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

   async getUserAlbums(id) {
    try {
      return await axios.get(
        `${process.env.REACT_APP_API_URL_BASE}/users/${id}/albums`
      );
    } catch (e) {
      console.log(e);
    }
  }

   async getUserTodos(id) {
    try {
      return await axios.get(
        `${process.env.REACT_APP_API_URL_BASE}/users/${id}/todos`
      );
    } catch (e) {
      console.log(e);
    }
  }

   async getUserPosts(id) {
    try {
      return await axios.get(
        `${process.env.REACT_APP_API_URL_BASE}/users/${id}/posts`
      );
    } catch (e) {
      console.log(e);
    }
  }
}
