// get /posts
import { receivePosts } from "./postsActions";
import { receiveCategories } from "./categoriesActions";
import { getInitialData } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const handleInitialData = async () => {
  return async (dispatch) => {
    try {
      const { categories, posts } = await getInitialData();
      console.log(categories, posts);
      dispatch(showLoading());
      dispatch(receiveCategories(categories));
      dispatch(receivePosts(posts));
      dispatch(hideLoading());
    } catch (err) {
      console.error(err);
    }
  };
};
