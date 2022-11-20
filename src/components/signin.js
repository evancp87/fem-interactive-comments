import React from "react";

function Signin() {
  return (
    <body className=" bg-indigo-200 flex flex-col justify-center">
      <div className="bg-slate-200 w-96 mx-auto h-auto rounded-md">
        <div className="bg-slate-400 flex flex-col justify-items-center rounded-md items-center mx-auto w-96 ">
          <h2 className="text-gray-300">Welcome to Readable</h2>
        </div>
        <div>
          <div className="mx-auto">
            <label htmlFor="users">Choose a user:</label>
            <select className="mx-auto">
              <option>Person</option>
              <option>Person</option>
              <option>Person</option>
              <option>Person</option>
            </select>
          </div>

          <button className="w-24 mt-10 mx-auto rounded-md bg-slate-400">
            Signin
          </button>
        </div>
      </div>
    </body>
  );
}

export default Signin;
