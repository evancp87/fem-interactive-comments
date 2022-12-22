import React, { useState, useEffect } from "react";
import Search from "./Search";
// import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="w-full bg-gray-500 h-20 flex flex-row justify-center shadow-lg items-center space-x-4p-6 ">
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between">
        <div className=" flex md:text-4xl lg:text-4xl ml-2 text-lg flex-row ">
          Readable
        </div>

        <Search />
      </div>

      <div className="flex justify-center items-baseline mr-1 mx-auto">
        <ul className="flex flex-col sm:flex-row md:flex-row lg:flex-row  justify-center  space-x-4">
          <li className="flex flex-row space-x-2">
            <img
              className="flex justify-center mt-2 md:mt-0 rounded-full mr-1 w-5 h-5 md:w-10 md:h-10 lg:w-10 lg:h-10 "
              src="https://images.pexels.com/photos/13366951/pexels-photo-13366951.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            />
            <p className="mt-2">Name</p>
          </li>

          <li>
            <button className="bg-slate-200 hover:bg-slate-100 p-1 mw-10 h-auto inline-block rounded-md">
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
