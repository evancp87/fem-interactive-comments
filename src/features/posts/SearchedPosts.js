import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";

function SearchedPosts() {
  const posts = useSelector((state) => state.posts.flat());

  // person starts typing, e.target.value

  console.log(posts);
  return <div>SearchedPosts</div>;
}

export default SearchedPosts;
