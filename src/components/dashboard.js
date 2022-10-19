import React from "react";
import CategoryList from "./CategoryList";
import PostList from "./PostList";
import Filters from "./Filters";

function Dashboard() {
  return (
    <>
      <CategoryList />
      <Filters />
      <PostList />
    </>
  );
}

export default Dashboard;
