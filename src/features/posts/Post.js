import React from "react";

// import DeleteButton from "./DeleteButton";
// import EditButton from "./EditButton";

import Vote from "../../components/Vote";
function Post(props) {
  return (
    <div className="max-w-6xl mb-4 shadow-xl w-[200px] hover:shadow-2xl sm:w-[300px] md:w-[500px] lg:w-[900px] h-auto rounded-md bg-slate-100 h-50 p-2.5 flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between space-x-4  ">
      <div className="flex flex-row">
        <Vote voteScore={props.voteScore} />

        <div className="ml-6 flex flex-col space-x-3 max-w-lg">
          <div className="flex mb-4 flex-row flex-wrap ml-2 space-x-4 justify-baseline">
            <img
              className=" rounded-full  ml-4 sm:ml-0 flex-row w-5 h-5 "
              src="https://images.pexels.com/photos/13366951/pexels-photo-13366951.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            />

            <p className="text-sm ">{props.author}</p>
            <p className=" text-sm">{props.timestamp}</p>
            <p className=" text-sm">{props.category}</p>
          </div>

          <h2 className=" text-lg">{props.title}</h2>
          <p className="text-base">{props.body}</p>
        </div>
      </div>
      <div className="space-x-3 mt-4 flex-row flex sm:mt-0  md:mt-0 lg:mt-0 sm:flex-col  md:flex-col lg:flex-col justify-between items-center ">
        <p className="text-sm"> {props.commentCount}</p>
      </div>
    </div>
  );
}

export default Post;
