import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <footer className="bg-slate-500 h-full w-full shadow-lg flex flex-row items-center ">
      <p className="mx-auto mt-10 mb-10">
        {" "}
        Made by 💻 Evan Parker 🤓 in {year}
      </p>
    </footer>
  );
}

export default Footer;
