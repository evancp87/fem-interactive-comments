import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Dashboard from "./features/screens/Dashboard";
import Footer from "./components/Footer";
import PostDetail from "./features/posts/PostDetail";
import AddPostForm from "./features/posts/AddPostForm";
import EditPost from "./features/posts/EditPost";
import CategoryPosts from "./features/posts/CategoryPosts";
import Error404 from "./features/screens/Error404";
import { useDispatch } from "react-redux";
import { getAllCats } from "./features/categories/categoriesSlice";
import { receivePosts } from "./features/posts/postsSlice";
import { receiveComments } from "./features/comments/commentsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCats());
    dispatch(receivePosts());
    dispatch(receiveComments());
  }, [dispatch]);

  return (
    <div className="App flex flex-col justify-center">
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route
            exact
            path="/categories/:category"
            element={<CategoryPosts />}
          />
          <Route path="/not-found" element={<Error404 />} />
          <Route path="/add-post" element={<AddPostForm />} />
          <Route path="/edit-post:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
