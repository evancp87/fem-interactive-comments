import React, { useState } from "react";
import CategoryList from "../categories/CategoryList";
import PostList from "../posts/PostList";
import Filters from "../../components/Filters";
import { MdAddCircle } from "react-icons/md";
import AddPostForm from "../posts/AddPostForm";
// const [modal, setModal] = useState(false);

// const openModal = () => {
//   setModal(!modal);
// };
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
      <AddPostForm />
    </div>
  );
}

export default Dashboard;
