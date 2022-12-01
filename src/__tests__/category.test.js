import store from "../store/store";
// import * as ReadableApi from "../utils/ReadableApi";
const middlewares = [thunk];
export const mockStore = configureMockStore(middlewares);

describe("category redux state tests", () => {
  it("Should initially set categories to an empty array", () => {
    const state = store.getState().categories;
    expect(state.categories).toEqual([]);
  });
});

describe("ACTION TESTS", () => {
  it("should fetch an array of categories", () => {
    const user = { id: 1, name: "John", age: 20 };
    const expectedActions = [
      {
        type: fetchUser.pending.type,
      },
      {
        type: action_A.type,
        payload: {},
      },
      {
        type: fetchUser.fulfilled.type,
        payload: user,
      },
    ];
    const store = mockStore({});
    // mock API returns
    jest
      .spyOn(importFile, "getUserById")
      .mockImplementation(() => Promise.resolve(user));
    return store.dispatch(fetchUser({ id: 1 })).then(() => {
      expect(
        store.getActions().map((action) => ({
          type: action.type,
          payload: action.payload,
        }))
      ).toEqual(expectedActions);
    });
  });

  it("should fetchUser: age < 18", () => {
    const user = { id: 2, name: "Jack", age: 16 };
    const expectedActions = [
      {
        type: fetchUser.pending.type,
      },
      {
        type: fetchUser.fulfilled.type,
        payload: user,
      },
    ];
    const store = mockStore({});
    // mock API returns
    jest
      .spyOn(importFile, "getUserById")
      .mockImplementation(() => Promise.resolve(user));
    return store.dispatch(fetchUser({ id: 2 })).then(() => {
      expect(
        store.getActions().map((action) => ({
          type: action.type,
          payload: action.payload,
        }))
      ).toEqual(expectedActions);
    });
  });
});

// https://fabiomarcoccia.medium.com/redux-toolkit-test-slice-and-actions-a6e88dfecb03
// https://egghead.io/lessons/redux-mocking-out-our-api-helper-with-jest-mock
// https://javascript.plainenglish.io/how-to-test-your-redux-api-calls-with-jest-64ebdd9c0034
