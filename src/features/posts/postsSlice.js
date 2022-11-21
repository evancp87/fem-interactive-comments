import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const url = "htt[://localhost:3001";
// import data from api and put as value in initial state
import * as ReadableApi from "../../utils/ReadableApi";

const initialState = {
  posts: [],
};

export const receivePostsByCategory = createAsyncThunk(
  "posts/receivePostsByCategory",
  (category) => {
    return ReadableApi.getPostsByCategory(category)
      .then((response) => response.json)
      .catch((error) => {
        "error", error;
      });
  }
);

export const receivePosts = createAsyncThunk("posts/receivePosts", () => {
  return ReadableApi.getPosts()
    .then((response) => response.json)
    .catch((error) => {
      "error", error;
    });
});

export const getPostsById = createAsyncThunk("posts/getPost", (id) => {
  return ReadableApi.getPostById(id)
    .then((response) => response.json)
    .catch((error) => {
      "error", error;
    });
});

export const addPost = createAsyncThunk("posts/addPost", (post) => {
  return ReadableApi.addPost(post.id)
    .then((response) => response.json)
    .catch((error) => {
      "error", error;
    });
});

export const removePost = createAsyncThunk("posts/removePost", (post) => {
  return ReadableApi.deletePost(post)
    .then((response) => response.json)
    .catch((error) => {
      "error", error;
    });
});

export const updatePost = createAsyncThunk("posts/updatePost", (post) => {
  return ReadableApi.editPost(post)
    .then((response) => response.json)
    .catch((error) => {
      "error", error;
    });
});

export const voteOnPost = createAsyncThunk("posts/voteOnPost", (params) => {
  return ReadableApi.votePost(params)
    .then((response) => response.json)
    .catch((error) => {
      "error", error;
    });
});

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
  extraReducers(builder) {
    builder.addCase(receivePostsByCategory.fulfilled, (state, action) => {
      let posts = [...action.payload];
      posts = posts.sort((a, b) => b.timestamp - a.timestamp);
      return posts;
    }),
      builder.addCase(receivePosts.fulfilled, (state, action) => {
        let posts = [...action.payload];
        posts = posts.sort((a, b) => b.timestamp - a.timestamp);
        return posts;
      }),
      builder.addCase(getPostsById.fulfilled, (state, action) => {
        const { id } = action.payload;
        let post = state.find((post) => post.id === id);
        return post;
      }),
      builder.addCase(addPost.fulfilled, (state, action) => {
        state.push(...action.payload);
      }),
      builder.addCase(removePost.fulfilled, (state, action) => {
        const { id } = action.payload;
        let removedPost = state.filter((post) => post.id !== id);
        return removedPost;
      }),
      builder.addCase(updatePost.fulfilled, (state, action) => {
        return [action.payload];
      }),
      builder.addCase(voteOnPost.fulfilled, (state, action) => {
        const { id, voteScore } = action.payload;
        let votedPost = state.find((post) => post.id === id);
        votedPost.voteScore = voteScore;
      });
  },
});

export const { getCategories } = postsSlice.actions;
console.log(postsSlice);
export default postsSlice.reducer;
