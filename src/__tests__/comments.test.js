import * as commentState from "../features/categories/commentsSlice";

describe("Comment reducer", () => {
  test("reducers", () => {
    let state;
    state = reducers(
      {
        categories: {
          categories: [
            { name: "react", path: "react" },
            { name: "redux", path: "redux" },
            { name: "udacity", path: "udacity" },
          ],
        },
        comments: { comments: [] },
        posts: { posts: [] },
      },
      {
        type: "posts/receivePosts/fulfilled",
        payload: [
          {
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
          {
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
        ],
        meta: {
          requestId: "n4HnWj8-PeaJjbVfTToYM",
          requestStatus: "fulfilled",
        },
      }
    );
    expect(state).toEqual({
      categories: {
        categories: [
          { name: "react", path: "react" },
          { name: "redux", path: "redux" },
          { name: "udacity", path: "udacity" },
        ],
      },
      comments: { comments: [] },
      posts: [
        [
          {
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
          {
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
        ],
      ],
    });
  });
});
