import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../features/comments/commentsSlice";
import { Navigate } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  const onChangeInput = (e) => {
    setSearch(e.target.value);
  };

  // useselector and .filter

  return (
    <input
      className="w-[30] ml-2 sm:w-[50] md:w-96 rounded-md md:ml-4 lg:ml-4"
      type="text"
      placeholder="Search by post, category or author"
    />
  );
}

export default Search;
