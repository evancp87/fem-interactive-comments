import React from "react";

function Category(props) {
  return (
    <div className=" px-6 py-2 bg-slate-200 hover:bg-slate-100 border-solid  border-red-200 border-4">
      {props.name}
    </div>
  );
}
export default Category;
