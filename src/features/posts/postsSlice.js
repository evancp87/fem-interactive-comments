import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const url = "htt[://localhost:3001";
// import data from api and put as value in initial state
import * as ReadableApi from "../../utils/ReadableApi";

const initialState = {
  posts: [],
};

export const receivePostsByCategory = createAsyncThunk(
  "posts/receivePostsByCategory",
  async (category) => {
    try {
      const response = await ReadableApi.getPostsByCategory(category);
      return response.json;
    } catch (error) {
      "error", error;
    }
  }
);

export const receivePosts = createAsyncThunk("posts/receivePosts", async () => {
  try {
    const response = await ReadableApi.getPosts();
    return response;
  } catch (error) {
    "error", error;
  }
});

export const getPostsById = createAsyncThunk("posts/getPost", async (id) => {
  try {
    const response = await ReadableApi.getPostById(id);
    return response;
  } catch (error) {
    "error", error;
  }
});

export const addPost = createAsyncThunk("posts/addPost", async (post) => {
  try {
    const response = await ReadableApi.addPost(post.id);
    return response;
  } catch (error) {
    "error", error;
  }
});

export const removePost = createAsyncThunk("posts/removePost", async (post) => {
  try {
    const response = await ReadableApi.deletePost(post);
    return response;
  } catch (error) {
    "error", error;
  }
});

export const updatePost = createAsyncThunk("posts/updatePost", async (post) => {
  try {
    const response = await ReadableApi.editPost(post);
    return response;
  } catch (error) {
    "error", error;
  }
});

export const voteOnPost = createAsyncThunk(
  "posts/voteOnPost",
  async (params) => {
    try {
      const response = await ReadableApi.votePost(params);
      return response;
    } catch (error) {
      "error", error;
    }
  }
);

// TODO: for comment count
// export const increaseCommentCount = createAsyncThunk(
//   "categories/getAllCategories",
//   () => {
//     return ReadableApi()
//       .then((response) => response.json)
//       .catch((error) => {
//         "error", error;
//       });
//   }
// );

// export const deductCommentCount = createAsyncThunk(
//   "categories/getAllCategories",
//   () => {
//     return ReadableApi()
//       .then((response) => response.json)
//       .catch((error) => {
//         "error", error;
//       });
//   }
// );

// TODO: add functions to api for filtering of posts
// export const sortPostsHigh = createAsyncThunk(
//   "categories/getAllCategories",
//   () => {
//     return ReadableApi()
//       .then((response) => response.json)
//       .catch((error) => {
//         "error", error;
//       });
//   }
// );

// export const sortPostsLow = createAsyncThunk(
//   "categories/getAllCategories",
//   () => {
//     return ReadableApi()
//       .then((response) => response.json)
//       .catch((error) => {
//         "error", error;
//       });
//   }
// );

// export const sortPostsRecent = createAsyncThunk(
//   "categories/getAllCategories",
//   () => {
//     return ReadableApi()
//       .then((response) => response.json)
//       .catch((error) => {
//         "error", error;
//       });
//   }
// );

// export const sortPostsOld = createAsyncThunk(
//   "categories/getAllCategories",
//   () => {
//     return ReadableApi()
//       .then((response) => response.json)
//       .catch((error) => {
//         "error", error;
//       });
//   }
// );

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // getCategories: (state) => {
    //   return {
    //     // categories => state.categories
    //     categories: state.categories,
    //     // can access actions and payload
    //   };
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(receivePosts.fulfilled, (state, action) => {
        // let posts = [...action.payload];
        let posts = [action.payload];
        console.log(action.payload);
        posts = posts.sort((a, b) => b.timestamp - a.timestamp);
        console.log(posts);
        return posts;
      })
      .addCase(receivePostsByCategory.fulfilled, (state, action) => {
        // let posts = [...action.payload];
        let posts = [...action.payload];

        posts = posts.sort((a, b) => b.timestamp - a.timestamp);
        return posts;
      })
      .addCase(getPostsById.fulfilled, (state, action) => {
        const { id } = action.payload;
        let post = state.find((post) => post.id === id);
        return post;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        return [state, action.payload];
      })
      .addCase(removePost.fulfilled, (state, action) => {
        const { id } = action.payload;
        let removedPost = state.filter((post) => post.id !== id);
        return removedPost;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        return [action.payload];
      })
      .addCase(voteOnPost.fulfilled, (state, action) => {
        const { id, voteScore } = action.payload;
        let votedPost = state.find((post) => post.id === id);
        votedPost.voteScore = voteScore;
      });
  },
});

export const { getCategories } = postsSlice.actions;
console.log(postsSlice);
export default postsSlice.reducer;
