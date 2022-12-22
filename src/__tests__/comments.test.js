import store from "../store/store";
import * as ReadableApi from "../utils/ReadableApi";
import { screen, waitFor, render } from "@testing-library/react";
import { server } from "../mocks/server";
import reducer, {
  initialState,
  receiveComments,
  addComment,
  editComment,
} from "../features/comments/commentsSlice";
import {
  editCommentResponse,
  addCommentResponse,
  deleteCommentResponse,
} from "../mocks/mocks";
beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Posts Redux Toolkit state", () => {
  it("Should be able to fetch an array of comments", async () => {
    const result = await store.dispatch(receiveComments());
    const comments = await result.payload;
    expect(result.type).toBe("posts/receiveComments/fulfilled");
    expect(comments).toEqual(getCommentsResponse);
  });
  it("Should be able to create a new Comment", async () => {
    // Saving previous state
    const previousState = store.getState().comments;

    const previousComment = [previousState.comments];
    previousComment.push(addComment);

    // Dispatching the action

    const result = await store.dispatch(addComment(addCommentResponse));

    const comment = result.payload;

    expect(result.type).toBe("posts/addComment/fulfilled");
    expect(comment).toEqual(addCommentResponse);

    const state = store.getState().comments;

    expect(state.comments).toEqual(previousComment);
  }),
    it("should edit an existing comment", async () => {}),
    it("should delete an existing comment", async () => {
      const id = req.params.id;
      const deletedPost = await store.dispatch(
        deleteComment(deleteCommentResponse)
      );
    });
});
