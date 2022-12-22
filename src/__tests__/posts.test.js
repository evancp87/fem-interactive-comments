import store from "../store/store";
// import * as ReadableApi from "../utils/ReadableApi";
import { screen, waitFor, render } from "@testing-library/react";
import { server } from "../mocks/server.js";
import reducer, {
  initialState,
  receivePosts,
  addPost,
} from "../features/posts/postsSlice";
import { addPostResponse, getPostsResponse } from "../mocks/mocks";
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
  it("Should initially set posts to an empty object", () => {
    const state = store.getState().posts;
    expect(state.posts).toEqual([]);
  });
  it("Should be able to fetch an array of posts", async () => {
    const result = await store.dispatch(receivePosts());
    const posts = await result.payload;
    expect(result.type).toBe("posts/receivePosts/fulfilled");
    expect(posts).toEqual(getPostsResponse);
  });
  it("Should be able to create a new post", async () => {
    // Saving previous state
    const previousState = store.getState().posts;

    const previousPost = [previousState.posts];
    previousPost.push(
      addPost({
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
      })
    );

    // Dispatching the action

    const result = await store.dispatch(addPost(addPostResponse));

    const post = result.payload;
    console.log(post);
    expect(result.type).toBe("posts/addPost/fulfilled");
    expect(post).toEqual(addPostResponse);

    const state = store.getState().posts;

    expect(state.posts).toEqual(previousPost);
  }),
    it("should edit an existing post", async () => {}),
    it("should delete an existing post", async () => {});
});
