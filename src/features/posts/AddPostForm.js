import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postsSlice";
import { Navigate } from "react-router-dom";

function AddPostForm() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [disabled, setDisabled] = useState(true);

  const categories = useSelector((state) => state.categories.categories);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const onChangeBody = (e) => {
    setBody(e.target.value);
  };
  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const categoryOptions = categories.map((category) => (
    <option key={category.name} onChange={onChangeCategory}>
      {category.name}
    </option>
  ));

  const dispatch = useDispatch();

  // variable to handle save
  // const handleSavedPost
  // dispatch(addPost(newPost))

  // formSubmitted && <navigate to="/" />
  const handleSubmitPost = async (e) => {
    e.preventDefault();
    const newPost = {
      id: nanoid(),
      timestamp: Date.now(),
      title,
      body,
      author,
      category,
    };
    console.log(newPost);
    try {
      dispatch(addPost(newPost));
      // dispatch(addPost(newPost.id));

      setTitle("");
      setBody("");
      setAuthor("");
      setCategory("");
    } catch (error) {
      console.log("There was an error creating the post:", error);
      alert("There was an error creating your post, please try again");
    }
  };
  return (
    <div className="flex flex-col items-center lg:w-[900px] max-w-6xl bg-slate-100 absolute -bottom-1.5 ">
      <h2>Add a post</h2>
      <form className="flex flex-col">
        <label htmlFor="author">
          <input
            type="text"
            name="author"
            value={author}
            id="author"
            onChange={onChangeAuthor}
          />
        </label>

        <label htmlFor="title">
          <input
            type="text"
            name="title"
            value={title}
            id="title"
            onChange={onChangeTitle}
          />
        </label>

        <label htmlFor="postCategory">
          <select
            id="postCategory"
            value={category}
            name="postCategory"
            onChange={onChangeCategory}
          >
            <option key=""></option>
            {categoryOptions}
          </select>
        </label>
        <label htmlFor="postBody">
          <textarea
            id="postBody"
            name="postBody"
            value={body}
            onChange={onChangeBody}
          ></textarea>
        </label>
        <input
          className="cursor-pointer"
          type="submit"
          onClick={handleSubmitPost}
          // disabled={disabled}
        />
      </form>
    </div>
  );
}

export default AddPostForm;
