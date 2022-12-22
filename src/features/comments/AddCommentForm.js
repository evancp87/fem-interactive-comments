import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "./commentsSlice";
import { Navigate } from "react-router-dom";

function AddCommentForm({ postId }) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [disabled, setDisabled] = useState(false);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeBody = (e) => {
    setBody(e.target.value);
  };
  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const [sentForm, setSentForm] = useState(false);

  const dispatch = useDispatch();
  const parentId = postId.id;
  console.log(parentId);

  const handleSavedComment = async (e) => {
    e.preventDefault();

    const newComment = {
      id: nanoid(),
      timestamp: new Date(),
      parentId: parentId,
      body,
      author,
    };
    try {
      setDisabled(true);
      dispatch(addComment(newComment));
      setTitle("");
      setAuthor("");
      setBody("");
    } catch (err) {
      console.log("There was a problem saving the comment:", err);
      alert("There was a problem saving the comment, please try again");
    }
  };
  // variable to handle save
  // const handleSavedComment
  // dispatch(addComment(newComment))

  // formSubmitted && <Navigate to="/" />

  return (
    <div className="flex flex-col items-center lg:w-[900px] max-w-6xl bg-slate-100">
      <h2>Add a comment</h2>
      <form className="flex flex-col">
        <label htmlFor="title">
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChangeTitle}
            id="title"
            placeholder="Give comment post a title"
            className="mb-4"
          />
        </label>

        <label htmlFor="author">
          <input
            type="text"
            name="author"
            value={author}
            onChange={onChangeAuthor}
            placeholder="Who are you?"
            id="author"
            className="mb-4"
          />
        </label>

        <label htmlFor="commentBody">
          <textarea
            id="commentBody"
            name="commentBody"
            value={body}
            onChange={onChangeBody}
            placeholder="Enter your comment"
          ></textarea>
        </label>

        <input
          type="submit"
          className="bg-slate-50 p-1 h-10 w-30 rounded-md cursor-pointer"
          onClick={handleSavedComment}
          disabled={disabled}
        />
      </form>
    </div>
  );
}

export default AddCommentForm;
