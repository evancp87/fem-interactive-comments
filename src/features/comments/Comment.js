import React from "react";
// import DeleteButton from "./DeleteButton";
// import AddComment from "./AddComment";
// import EditButton from "./EditButton";
import ReplyButton from "../../components/ReplyButton";
import DeleteButton from "../posts/DeleteButton";
import EditButton from "../../components/EditButton";
import { formatDate } from "../../utils/helpers";
import Vote from "../../components/Vote";

function Comment({ comment }) {
  console.log({ comment });
  // console.log(formatDate(comment.timestamp));
  return (
    <div>
      <article className="mb-4 max-w-6xl shadow-xl w-[200px] hover:shadow-2xl sm:w-[300px] md:w-[500px] lg:w-[900px] h-auto rounded-md bg-slate-100 h-50 p-2.5 flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between space-x-4  ">
        <div className="flex flex-row">
          <Vote />

          <div className="ml-6 flex flex-col space-x-3 max-w-lg">
            <div className="flex mb-4 flex-row flex-wrap ml-2 space-x-4 justify-baseline">
              <img
                className=" rounded-full  ml-4 sm:ml-0 flex-row w-5 h-5 "
                src="https://images.pexels.com/photos/13366951/pexels-photo-13366951.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              />

              <p className="text-sm ">Name</p>
              <p className=" text-sm">{formatDate(comment.timestamp)}</p>
              <h2>{comment.author}</h2>
            </div>
            <h2 className=" text-lg">{comment.body}</h2>

            <p className=" text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="space-x-3 mt-4 flex-row flex sm:mt-0  md:mt-0 lg:mt-0 sm:flex-col  md:flex-col lg:flex-col justify-between items-center ">
          <ReplyButton />
          <DeleteButton />
          <EditButton />
        </div>
      </article>
    </div>
  );
}

export default Comment;
