import React from "react";
import { BsReplyFill } from "react-icons/bs";

function ReplyButton() {
  return (
    <div>
      <button className="flex flex-row text-sm">
        <BsReplyFill />
        Reply
      </button>
    </div>
  );
}

export default ReplyButton;
