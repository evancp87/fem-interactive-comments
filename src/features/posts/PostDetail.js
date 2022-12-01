import React, { useEffect } from "react";
import PostData from "./PostData";
import { useSelector, useDispatch } from "react-redux";
import { getPostsById } from "./postsSlice";
import { useParams, Navigate } from "react-router-dom";
// import DeleteButton from "./DeleteButton";
// import EditButton from "./EditButton";

function PostDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state);
  console.log(posts);
  const postId = useSelector((state) =>
    state.posts[0].find((post) => post.id === id)
  );
  useEffect(() => dispatch(getPostsById(id)), [dispatch, id]);

  console.log(postId);

  return (
    <div>
      {postId ? <PostData postId={postId} /> : <Navigate to={"/not-found"} />}
    </div>
  );
}

export default PostDetail;
