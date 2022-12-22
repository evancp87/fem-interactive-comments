import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

import { navigate, useNavigate } from "react-router-dom";

function DeleteCommentButton() {
  return (
    <div>
      <button>
        <BsFillTrashFill />
      </button>
    </div>
  );
}

export default DeleteCommentButton;
