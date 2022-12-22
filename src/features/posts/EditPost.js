import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "./postsSlice";
import { Navigate } from "react-router-dom";
import { MdOutlineNoStroller } from "react-icons/md";
import { useParams } from "react-router-dom";

function EditPost({ post }) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [sentForm, setSentForm] = useState(false);

  const { id } = useParams();
  const postToEdit = useSelector((state) =>
    state.posts.find((post) => post.id === id)
  );

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (e) => {
    setBody(e.target.value);
  };

  const dispatch = useDispatch();

  // variable to handle save
  // const handleSavedPost
  // dispatch(addPost(newPost))

  // formSubmitted && <navigate to="/" />
  const handleEditPost = () => {
    const editedPost = {
      timestamp: Date.now(),
      title: title || "",
      body: body || "",
    };

    try {
      dispatch(updatePost(editedPost));
      setTitle("");
      setCategory("");
      setAuthor("");
      setBody("");
    } catch (err) {
      console.log("There was a problem saving the post", err);
      alert("There was a problem saving the post");
    }
  };

  return (
    <div className="flex flex-col items-center lg:w-[900px] max-w-6xl bg-slate-100 absolute -bottom-1.5 ">
      <h2>Edit your post</h2>
      <form className="flex flex-col">
        <label htmlFor="title">
          <input
            type="text"
            name="title"
            value={title}
            id="title"
            onChange={onChangeTitle}
          />
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
          onClick={handleEditPost}
          // disabled={disabled}
        />
      </form>
    </div>
  );
}

export default EditPost;
