import React from "react";

function Modal() {
  return (
    <div className="text-gray-200 bg-slate-50 w-96 mx-auto mb-4 border-2 border-solid border-slate-300 rounded-md p-10">
      <div>
        <h2 className="text-gray-800">Delete comment </h2>

        <p className="text-gray-400 mt-4">
          Are you sure you want to delete this comment? This will remove the
          comment and can’t be undone.
        </p>
      </div>

      <div className="mt-3">
        <button className="bg-slate-500 text-white pr-3 pl-3 rounded-md">
          No, cancel
        </button>

        <button className="bg-red-500 text-white pr-3 pl-3 rounded-md">
          Yes, delete
        </button>
      </div>
    </div>
  );
}

export default Modal;
