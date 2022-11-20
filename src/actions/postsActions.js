export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const VOTE_POST = "VOTE_POST";
export const INCREASE_COMMENT_COUNT = "UPVOTE";
export const DEDUCT_COMMENT_COUNT = "DEDUCT_COMMENT_COUNT";
export const SORT_POSTS_BY_HIGHEST_VOTES = "SORT_POSTS_BY_HIGHEST_VOTES";
export const SORT_POSTS_BY_LOWEST_VOTES = "SORT_POSTS_BY_LOWEST_VOTES";
export const SORT_POSTS_BY_MOST_RECENT = "SORT_POSTS_BY_MOST_RECENT";
export const SORT_POSTS_BY_OLDEST = "VOTE_POST";

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function removePost(post) {
  return {
    type: REMOVE_POST,
    post: post.id,
  };
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    comment: post.id,
  };
}

export function votePost(post) {
  return {
    type: VOTE_POST,
    post: post.id,
  };
}

export function increaseCommentCount(post) {
  return {
    type: INCREASE_COMMENT_COUNT,
    post: post.id,
  };
}

export function deductCommentCount(post) {
  return {
    type: DEDUCT_COMMENT_COUNT,
    post: post.id,
  };
}

export function sortPostsHigh(post) {
  return {
    type: SORT_POSTS_BY_HIGHEST_VOTES,
    post: post.id,
  };
}

export function sortPostsLow(post) {
  return {
    type: SORT_POSTS_BY_LOWEST_VOTES,
    post: post.id,
  };
}

export function sortPostsRecent(post) {
  return {
    type: SORT_POSTS_BY_MOST_RECENT,
    post: post.id,
  };
}

export function sortPostsOld(post) {
  return {
    type: SORT_POSTS_BY_OLDEST,
    post: post.id,
  };
}
