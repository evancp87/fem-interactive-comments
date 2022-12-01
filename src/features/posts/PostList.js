import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
import Post from "./Post";

function PostList() {
  const posts = useSelector((state) => state.posts[0]);
  console.log(posts);

  return (
    <section className="mt-4 flex items-center flex-col">
      {posts &&
        posts.map((post, i) => (
          <Link to={`/posts/${post.id}`}>
            <Post
              key={i}
              timestamp={post.timestamp}
              body={post.body}
              author={post.author}
              category={post.category}
              voteScore={post.voteScore}
              commentCount={post.commentCount}
              title={post.title}
            />
          </Link>
        ))}
      {/* <div key={i}>{post.body}</div> */}
      <Post />
    </section>
    //   Object.keys(defaultData).map(post => <Post/>)
  );
}

export default PostList;
