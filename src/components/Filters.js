import React from "react";

function Filters() {
  return (
    <div className="flex justify-center mt-3 space-x-1">
      <button className="bg-slate-50 p-1 h-10 w-30 rounded-md cursor-pointer">
        Most Recent
      </button>
      <button className="bg-slate-50 p-1 h-10 w-30 rounded-md cursor-pointer">
        Highest Votes
      </button>
    </div>
  );
}

export default Filters;
