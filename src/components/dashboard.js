import React from "react";
import CategoryList from "../features/categories/CategoryList";
import PostList from "../features/posts/PostList";
import Filters from "./Filters";
import { MdAddCircle } from "react-icons/md";

function Dashboard() {
  return (
    <div className="bg-blue-200 min-h-screen">
      <CategoryList />
      <Filters />
      <PostList />
      <div className=" absolute bottom-10 right-10 z-50">
        <button className="flex justify-center items-center shadow-lg hover:shadow-xl transition-all transition-500 h-10 w-10 md:h-28 md:w-28 bg-indigo-400 rounded-full">
          <MdAddCircle />
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
