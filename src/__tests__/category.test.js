import reducers from "../../reducers";

test("reducers", () => {
  let state;
  state = reducers(
    { categories: [], comments: [], posts: { undefined: [] }, loadingBar: {} },
    { type: "" }
  );
  expect(state).toEqual({
    categories: [],
    comments: [],
    posts: { undefined: [] },
    loadingBar: {},
  });
});
