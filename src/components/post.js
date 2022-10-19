import React from "react";

import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import Vote from "./Vote";
function Post() {
  return (
    <>
      <DeleteButton />
      <EditButton />
      <Vote />
    </>
  );
}

export default Post;
