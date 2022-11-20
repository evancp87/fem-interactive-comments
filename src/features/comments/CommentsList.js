import React, { useEffect } from "react";
import Comment from "../../components/Comment";
import { useSelector, useDispatch } from "react-redux";
import {
  receiveComments,
  addComment,
  removeComments,
  updateComments,
  voteComment,
} from "../../actions/commentsActions";
function CommentsList() {
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  useEffect(() => dispatch(receiveComments(comments)), [dispatch]);

  return (
    <div className="items-center flex ">
      <Comment />
    </div>
    //   Object.keys(defaultData).map(comment => <Comment/>)
  );
}

export default CommentsList;
