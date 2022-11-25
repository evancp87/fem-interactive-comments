const api = "http://localhost:3001";

const myHeaders = new Headers();
myHeaders.append("Authorization", "ReadableEvan");

var requestOptions = {
  Accept: "application/json",
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

var postRequestOptions = {
  Accept: "application/json",
  method: "POST",
  headers: [...myHeaders],
  redirect: "follow",
};

var putRequestOptions = {
  Accept: "application/json",
  method: "PUT",
  headers: myHeaders,
  redirect: "follow",
};

var deleteRequestOptions = {
  Accept: "application/json",
  method: "DELETE",
  headers: myHeaders,
  redirect: "follow",
};

const headers = {
  Accept: "application/json",
  Authorization: "ReadableEvan",
};
console.log(headers);
// get  /categories

export const generateUID = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export const getAllCategories = () => {
  return (
    fetch(`${api}/categories/`, requestOptions)
      .then((response) => response.json())
      // .then((result) => console.log(result.categories))
      .then((data) => data.categories)
      .catch((error) => console.log("error", error))
  );
};
console.log(getAllCategories());

// get /categories/posts
export const getPostsByCategory = async (category) => {
  const response = await fetch(`${api}/${category}/posts`, requestOptions);

  const catPosts = await response.json();
  return catPosts;
};

console.log(getPostsByCategory("react"));

// get /posts
export const getPosts = async () => {
  try {
    const response = await fetch(`${api}/posts/`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log("error", error);
  }
};
console.log(getPosts());

//  get /posts/:id

export const getPostById = async (id) => {
  try {
    const response = await fetch(`${api}/posts/${id}`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log("error", error);
  }
};

console.log(getPostById("8xf0y6ziyjabvozdd253nd"));
// post /posts/

export const addPost = async (params) => {
  try {
    const response = await fetch(`${api}/posts/`, postRequestOptions, {
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log("error", error);
  }
  // {
  //   method: "POST",
  //   headers: { ...headers, "Content-Type": "application/json" },
  //   body: JSON.stringify(params),
  // })
  // .then((res) => res.json())
  // .then((data) => data);
};

console.log(addPost());
// post /posts/:id

export const votePost = async (params) => {
  try {
    const response = await fetch(`${api}/posts/${params}`, postRequestOptions, {
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log("error", error);
  }
};
console.log(votePost());

// put /posts/:id

export const editPost = async (post) => {
  try {
    const response = await fetch(`${api}/posts/${post.id}`, putRequestOptions, {
      body: JSON.stringify(post.id),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log("error", error);
  }
};

console.log(editPost("8xf0y6ziyjabvozdd253nd"));
// delete /posts/:id

export const deletePost = async (post) => {
  try {
    const response = await fetch(
      `${api}/posts/${post.id}`,
      deleteRequestOptions,
      {
        body: JSON.stringify(post.id),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log("error", error);
  }
};

console.log(deletePost("8xf0y6ziyjabvozdd253nd"));
// get posts/:id/comments
export const getCommentsByPostId = (id) => {
  fetch(`${api}/posts/${id}/comments`, requestOptions)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log("error", error));
};
console.log(getCommentsByPostId("8xf0y6ziyjabvozdd253nd"));

// single comment details
// get posts/:id/comments
export const getCommentDetail = async (comment) => {
  try {
    const response = await fetch(
      `${api}/comments/${comment.id}`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log("error", error);
  }
};

console.log(getCommentDetail("894tuq4ut84ut8v4t8wun89g"));

// post /comments
export const addComment = async (newComment) => {
  try {
    const response = await fetch(`${api}/comments/`, postRequestOptions, {
      body: JSON.stringify(newComment),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log("error", error);
  }
};

console.log(addComment());
export const voteComment = async (params) => {
  try {
    const response = await fetch(
      `${api}/comments/${params.id}`,
      postRequestOptions,
      {
        body: JSON.stringify(params.id),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log("error", error);
  }
};
console.log(voteComment(1));

// put /comments/:id

export const editComment = async (comment) => {
  try {
    const response = await fetch(
      `${api}/comments/${comment.id}`,
      putRequestOptions,
      {
        body: JSON.stringify(comment.id),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log("error", error);
  }
};

console.log(editComment("8xf0y6ziyjabvozdd253nd"));

// delete /comments/:id

export const deleteComment = async (comment) => {
  try {
    const response = await fetch(
      `${api}/comments/${comment.id}`,
      deleteRequestOptions,
      {
        body: JSON.stringify(comment.id),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log("error", error);
  }
};

console.log(deleteComment("8xf0y6ziyjabvozdd253nd"));
