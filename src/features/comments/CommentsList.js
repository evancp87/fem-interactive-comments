import React, { useEffect } from "react";
import Comment from "./Comment";
import { receiveComments } from "./commentsSlice";
import { useSelector, useDispatch } from "react-redux";

function CommentsList({ postId }) {
  const parentId = postId.id;
  let comments = useSelector((state) => state.comments);
  console.log(comments);

  const dispatch = useDispatch();
  console.log(postId);
  console.log(parentId);

  useEffect(() => dispatch(receiveComments(parentId)), [dispatch, parentId]);

  return (
    <div className="items-center flex ">
      {/* <Comment comments={comments} /> */}
      {comments && comments.map((comment) => <Comment comment={comment} />)}
    </div>
    //   Object.keys(defaultData).map(comment => <Comment/>)
  );
}

export default CommentsList;
