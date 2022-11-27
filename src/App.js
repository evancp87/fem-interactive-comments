import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Dashboard from "./features/screens/Dashboard";
import Footer from "./components/Footer";
import Post from "./features/posts/Post";
import AddPost from "./features/posts/AddPost";
import Error404 from "./features/screens/Error404";
import CategoryList from "./features/categories/CategoryList";
import { useDispatch } from "react-redux";
import { getAllCats } from "./features/categories/categoriesSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCats());
  }, [dispatch]);

  return (
    <div className="App flex flex-col justify-center">
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route
            exact
            path="/category/:category"
            component={<CategoryList />}
          />
          <Route path="/not-found" element={<Error404 />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/edit-post:id" element={<AddPost />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
