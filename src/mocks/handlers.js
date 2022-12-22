// src/mocks/handlers.js
import { rest } from "msw";
import {
  getPostsResponse,
  getCommentsResponse,
  addPost,
  addComment,
  editComment,
  editPost,
} from "./mocks";

const api = "http://localhost:3001";
const postId = "8xf0y6ziyjabvozdd253nd";
const commentId = "894tuq4ut84ut8v4t8wun89g";

export const handlers = [
  rest.get(`${api}/posts`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(getPostsResponse));
  }),

  rest.post(`${api}/posts`, (req, res, ctx) => {
    {
      return res(ctx.status(201), ctx.json(addPost));
    }
  }),
  rest.post(`${api}/posts`, (req, res, ctx) => {
    {
      return res(ctx.status(201), ctx.json(editPost));
    }
  }),

  rest.put(`${api}/posts/${postId}`, (req, res, ctx) => {
    {
      return res(ctx.status(201), ctx.json(editPost));
    }
  }),
  rest.delete(`${api}/posts/${postId}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json("post deleted successfully"));
  }),
  rest.get(`${api}/posts/${postId}/comments`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json(getCommentsResponse))
  ),

  rest.post(`${api}/comments`, (req, res, ctx) => {
    return res(ctx.json(addComment), ctx.status(201));
  }),
  rest.post(`${api}/comments/${commentId}`, (req, res, ctx) => {
    // req.id = 3;
    {
      return res(ctx.json(editComment), ctx.status(201));
    }
  }),
  rest.delete(`${api}/comments/${commentId}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json("comment deleted successfully"));
  }),
];

export const getCommentsHandlers = [
  rest.get(`${api}/posts/${postId}/comments`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json(getCommentsResponse))
  ),

  rest.post(`${api}/comments`, (req, res, ctx) => {
    return res(ctx.json(addComment), ctx.status(201));
  }),
  rest.post(`${api}/comments/${commentId}`, (req, res, ctx) => {
    // req.id = 3;
    {
      return res(ctx.json(editComment), ctx.status(201));
    }
  }),
  rest.delete(`${api}/comments/${commentId}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json("comment deleted successfully"));
  }),
];
