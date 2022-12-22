// get requests

export const getPostsResponse = [
  {
    "8xf0y6ziyjabvozdd253nd": {
      id: "8xf0y6ziyjabvozdd253nd",
      timestamp: 1467166872634,
      title: "Udacity is the best place to learn React",
      body: "Everyone says so after all.",
      author: "thingtwo",
      category: "react",
      voteScore: 6,
      deleted: false,
      commentCount: 2,
    },
    "6ni6ok3ym7mf1p33lnez": {
      id: "6ni6ok3ym7mf1p33lnez",
      timestamp: 1468479767190,
      title: "Learn Redux in 10 minutes!",
      body: "Just kidding. It takes more than 10 minutes to learn technology.",
      author: "thingone",
      category: "redux",
      voteScore: -5,
      deleted: false,
      commentCount: 0,
    },
  },
];

export const getCommentsResponse = {
  "894tuq4ut84ut8v4t8wun89g": {
    id: "894tuq4ut84ut8v4t8wun89g",
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1468166872634,
    body: "Hi there! I am a COMMENT.",
    author: "thingtwo",
    voteScore: 6,
    deleted: false,
    parentDeleted: false,
  },
  "8tu4bsun805n8un48ve89": {
    id: "8tu4bsun805n8un48ve89",
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1469479767190,
    body: "Comments. Are. Cool.",
    author: "thingone",
    voteScore: -5,
    deleted: false,
    parentDeleted: false,
  },
};

// post requests

export const addPostResponse = {
  "8xdfadfadfadfedaf": {
    id: "88xdfadfadfadfedaf",
    timestamp: 1467166872635,
    title: "Frogs",
    body: "Frogs are cool",
    author: "Froggy",
    category: "react",
    voteScore: 0,
    deleted: false,
    commentCount: 0,
  },
};

export const addCommentResponse = {
  "86ijvhgvh990089g": {
    id: "86ijvhgvh990089g",
    parentId: "8xdfadfadfadfedaf",
    timestamp: 1468166872634,
    body: "Frogs are ok",
    author: "Froghater",
    voteScore: 0,
    deleted: false,
    parentDeleted: false,
  },
};

// put requests
export const editCommentResponse = {
  "86ijvhgvh990089g": {
    id: "86ijvhgvh990089g",
    parentId: "8xdfadfadfadfedaf",
    timestamp: 1468166872634,
    body: "Frogs are the best- edited",
    author: "Froghater",
    voteScore: 0,
    deleted: false,
    parentDeleted: false,
  },
};

export const editPostResponse = {
  "8xdfadfadfadfedaf": {
    id: "88xdfadfadfadfedaf",
    timestamp: 1467166872635,
    title: "Frogs",
    body: "I've changed my mind on frogs",
    author: "Froggy",
    category: "react",
    voteScore: 0,
    deleted: false,
    commentCount: 0,
  },
};

// delete requests
export const deleteCommentResponse = {
  "86ijvhgvh990089g": {
    id: "86ijvhgvh990089g",
    parentId: "8xdfadfadfadfedaf",
    timestamp: 1468166872634,
    body: "Frogs are the best- edited",
    author: "Froghater",
    voteScore: 0,
    deleted: true,
    parentDeleted: false,
  },
};

export const deletePostResponse = {
  "8xdfadfadfadfedaf": {
    id: "88xdfadfadfadfedaf",
    timestamp: 1467166872635,
    title: "Frogs",
    body: "I've changed my mind on frogs",
    author: "Froggy",
    category: "react",
    voteScore: 0,
    deleted: true,
    commentCount: 0,
  },
};
