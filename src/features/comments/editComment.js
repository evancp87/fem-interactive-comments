import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "./commentsSlice";
import { Navigate, useParams } from "react-router-dom";

function editComment() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const commentToEdit = useSelector((state) =>
    state.comments.find((comment) => comment.id === id)
  );

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

  // formSubmitted && <navigate to="/" />
  const handleEditedComment = () => {
    const editedComment = {
      id: nanoid(),
      // parentId: parentId,
      timestamp: new Date(),
      body: "Hi there! I am a COMMENT.",
      author: "thingtwo",
    };

    try {
      dispatch(updateComment(editedComment));
      setTitle("");
      setCategory("");
      setAuthor("");
      setBody("");
    } catch (err) {
      console.log("There was a problem saving the comment", err);
      alert("There was a problem saving the comment");
    }
  };

  return <div>editComment</div>;
}

export default editComment;
