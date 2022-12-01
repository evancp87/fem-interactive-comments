import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { receivePostsByCategory } from "./postsSlice";
import Post from "./Post";
import CategoryList from "../categories/CategoryList";

function CategoryPosts() {
  const dispatch = useDispatch();
  const { category } = useParams();
  console.log(category);
  const posts = useSelector((state) =>
    state.posts[0].filter((post) => post.category === category)
  );

  useEffect(
    () => dispatch(receivePostsByCategory(category)),
    [category, dispatch]
  );

  return (
    <div>
      <CategoryList />
      {posts ? <Post posts={posts} /> : <p>No posts</p>}
    </div>
  );
}

export default CategoryPosts;
