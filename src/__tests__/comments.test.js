import store from "../store/store";

describe("comments redux state tests", () => {
  it("Should initially set comments to an empty array", () => {
    const state = store.getState().comments;
    expect(state.comments).toEqual([]);
  });
});

const id = "8xf0y6ziyjabvozdd253nd";
const getAllPosts = ReadableApi.getPosts(id);
// This is the function we'll be testing

// This is the section where we mock `fetch`
const fetchMock = jest
  .spyOn(global, "fetch")
  .mockImplementation(() =>
    Promise.resolve({ json: () => Promise.resolve([]) })
  );

describe("get all posts", () => {
  test("works", async () => {
    const json = await getAllPosts;

    // highlight-start
    expect(fetchMock).toHaveBeenCalledWith("http://localhost:3001/posts");
    // highlight-end

    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toEqual(2);
  });
});
