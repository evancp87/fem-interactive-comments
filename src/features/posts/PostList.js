import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import {
//   receivePosts,
//   addPost,
//   updatePost,
//   votePost,
//   increaseCommentCount,
//   deductCommentCount,
//   sortPostshigh,
//   sortPostsLow,
//   sortPostsRecent,
//   sortPostsOld,
// } from "../actions/postsActions";
import Post from "../../components/Post";

function PostList() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const dispatch = useDispatch();
  useEffect(() => dispatch(receivePosts(posts)), [dispatch]);
  return (
    <section className="mt-4 flex items-center flex-col">
      {posts &&
        Object.keys(posts).map((post) => <div key={post.id}>{post.body}</div>)}

      <Post />
    </section>
    //   Object.keys(defaultData).map(post => <Post/>)
  );
}

export default PostList;
