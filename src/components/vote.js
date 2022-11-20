import React, { useState } from "react";

function Vote() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    count > 0 ? setCount((count) => count - 1) : 0;
  };
  return (
    <div>
      <button className="mt-4 bg-slate-200 rounded-md h-20 w-10 flex flex-col justify-start items-center ">
        <div className="counter__btn-inner" onClick={increase}>
          +
        </div>
        <p className="counter-amount">{count}</p>
        <div className="counter__btn-inner" onClick={decrease}>
          {" "}
          -
        </div>
      </button>
    </div>
  );
}

export default Vote;
