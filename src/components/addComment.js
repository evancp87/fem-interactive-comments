import React from "react";
// import React, { useState, useSelector, useDispatch } from "react";
// import Modal from "./Modal";

function AddComment() {
  return (
    <div className="rounded-md bg-slate-100 h-50 w-full space-x-4  ml-2 flex flex-row ">
      <div className="flex flex-row">
        <img
          className="justify-center shadow-xl hover:shadow-2xl rounded-full  flex-row w-3 h-3 "
          src="https://images.pexels.com/photos/13366951/pexels-photo-13366951.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        />
        <textarea placeholder="Add a comment..."> </textarea>
      </div>
      <button className="bg-indigo-500 w-20"> Send </button>
    </div>
  );
}

export default AddComment;
