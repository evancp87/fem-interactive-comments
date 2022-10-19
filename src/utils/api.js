const api = "http://localhost:3001";

const headers = {
  Accept: "application/json",
  Authorization: "Anything",
};

// get  /categories

export const getAllCategories = () => {
  fetch(`${api}/categories`, { headers })
    .then((res) => res.json())
    .then((data) => data.categories);
};

// get /categories/posts
export const getPostsByCategory = (category) => {
  fetch(`${api}/${category}/posts`, { headers })
    .then((res) => res.json())
    .then((data) => data);
};

// get /posts
export const getPosts = () => {
  fetch(`${api}/posts`, { headers })
    .then((res) => res.json())
    .then((data) => data);
};

//  get /posts/:id

export const getPostById = (id) => {
  fetch(`${api}/posts/${id}`, { headers })
    .then((res) => res.json())
    .then((data) => data);
};

// post /posts/

export const addPost = (params) => {
  fetch(`${api}/posts/`, {
    method: "POST",
    headers: { ...headers, "content-type": "application/json" },
    body: JSON.stringify(params),
  })
    .then((res) => res.json())
    .then((data) => data);
};

// post /posts/:id

export const votePost = (params) => {
  fetch(`${api}/posts/${params.id}`, {
    method: "POST",
    headers: { ...headers, "content-type": "application/json" },
    body: JSON.stringify(params.id),
  })
    .then((res) => res.json())
    .then((data) => data);
};

// put /posts/:id

export const editPost = (post) => {
  fetch(`${api}/posts/${post.id}`, {
    method: "PUT",
    headers: { ...headers, "content-type": "application/json" },
    body: JSON.stringify(post.id),
  })
    .then((res) => res.json())
    .then((data) => data);
};

// delete /posts/:id

export const deletePost = (post) => {
  fetch(`${api}/posts/${post.id}`, {
    method: "DELETE",
    headers: { ...headers, "content-type": "application/json" },
    body: JSON.stringify(post.id),
  })
    .then((res) => res.json())
    .then((data) => data);
};

// get posts/:id/comments
export const getCommentsByPostId = (id) => {
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then((res) => res.json)
    .then((data) => data);
};

// post /comments
export const addComment = (newComment) => {
  fetch(`${api}/comments/`, {
    method: "POST",
    headers: { ...headers, "content-type": "application/json" },
    body: JSON.stringify(newComment),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const voteComment = (params) => {
  fetch(`${api}/comments/${params.id}`, {
    method: "POST",
    headers: { ...headers, "content-type": "application/json" },
    body: JSON.stringify(params.id),
  })
    .then((res) => res.json())
    .then((data) => data);
};

// put /comments/:id

export const editComment = (comment) => {
  fetch(`${api}/comments/${comment.id}`, {
    method: "PUT",
    headers: { ...headers, "content-type": "application/json" },
    body: JSON.stringify(comment.id),
  })
    .then((res) => res.json())
    .then((data) => data);
};

// delete /comments/:id

export const deleteComment = (comment) => {
  fetch(`${api}/comments/${comment.id}`, {
    method: "DELETE",
    headers: { ...headers, "content-type": "application/json" },
    body: JSON.stringify(comment.id),
  })
    .then((res) => res.json())
    .then((data) => data);
};
