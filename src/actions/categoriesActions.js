import { getAllCategories } from "../utils/api";
console.log(getAllCategories());
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories,
  };
}

export const getCategories = () => (dispatch) => {
  getAllCategories().then((data) =>
    dispatch({ type: RECEIVE_CATEGORIES, categories: data })
  );
};
console.log(getCategories());
