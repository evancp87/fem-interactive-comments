import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import Error404 from "./components/Error404";
import { handleInitialData } from "../src/actions/shared";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    fetch(handleInitialData());
  }, []);

  console.log(handleInitialData());
  return (
    <div className="App flex flex-col justify-center">
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
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
