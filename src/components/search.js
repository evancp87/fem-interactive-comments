import React from "react";

function Search() {
  return (
    <input
      className="w-[30] ml-2 sm:w-[50] md:w-96 rounded-md md:ml-4 lg:ml-4"
      type="text"
      placeholder="Search by post, category or author"
    />
  );
}

export default Search;
