import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Post from "./Post";

function PostList() {
  const posts = useSelector((state) => state.posts.flat());
  // const posts = useSelector((state) => state.posts[0]);
  // console.log(postsTwo);
  console.log(posts);

  console.log(posts);

  return (
    <section className="mt-4 flex items-center flex-col">
      <Post posts={posts} />
    </section>
  );
}

export default PostList;
