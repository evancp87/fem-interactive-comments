import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

import { navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removePost } from "./postsSlice";

function DeleteButton() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const navigation = navigate();
  // const navHistory = useNavigate();
  const postToDelete = useSelector((state) =>
    state.posts.find((post) => post.id === id)
  );

  const handleRemovePost = async () => {
    try {
      dispatch(removePost(postToDelete));
    } catch (err) {
      console.log("There was an error", err);
      alert("There was an error deleting the post, please try again");
    }
  };
  return (
    <div>
      <button onClick={() => handleRemovePost()}>
        <BsFillTrashFill />
      </button>
    </div>
  );
}

export default DeleteButton;
