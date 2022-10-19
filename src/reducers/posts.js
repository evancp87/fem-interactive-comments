import {
  RECEIVE_POSTS,
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  VOTE_POST,
  INCREASE_COMMENT_COUNT,
  DEDUCT_COMMENT_COUNT,
  SORT_POSTS_BY_HIGHEST_VOTES,
  SORT_POSTS_BY_LOWEST_VOTES,
  SORT_POSTS_BY_MOST_RECENT,
  SORT_POSTS_BY_OLDEST,
} from "../actions/posts";

export default function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        [action.id]: [...action.posts],
      };

    case ADD_POST:
      return [...state, action.post];

    case REMOVE_POST:
      const deletedPost = state[action.post].filter((post) => {
        return post.id !== action.id;
      });
      return {
        ...state,
        [action.id]: [deletedPost],
      };

    case UPDATE_POST:
      const editedPost = state[action.post]
        .filter((post) => post.id !== action.id)
        .concat([action.post]);
      return {
        ...state,
        [action.id]: [editedPost],
      };

    case VOTE_POST:
      const newVote = action.post.voteScore;
      const otherVotes = [...state];
      otherVotes.forEach((post) => {
        if (post.id === action.post.id) {
          post.voteScore = newVote;
          return post;
        }
      });
      return newVote;

    case INCREASE_COMMENT_COUNT:
      const increasedCommentCountState = state[action.post.id].filter(
        (post) => post.id === action.id
      )[0];
      const restCommentCounts = state[action.post].filter(
        (post) => post.id !== action.id
      );
      return [
        ...restCommentCounts,
        {
          ...increasedCommentCountState,
          commentCount: increasedCommentCountState.commentCount + 1,
        },
      ];

    case DEDUCT_COMMENT_COUNT:
      const newCommentCountState = state[action.post.id].filter(
        (post) => post.id === action.id
      )[0];
      const otherCommentCounts = state[action.post].filter(
        (post) => post.id !== action.id
      );
      return [
        ...otherCommentCounts,
        {
          ...newCommentCountState,
          commentCount: newCommentCountState.commentCount - 1,
        },
      ];

    case SORT_POSTS_BY_HIGHEST_VOTES:
      const stateCopyHighestVotes = [...state];
      const postsSortedByHighestVotes = stateCopyHighestVotes.sort(
        (a, b) => b.timestamp - a.timestamp
      );
      return postsSortedByHighestVotes;

    case SORT_POSTS_BY_LOWEST_VOTES:
      const stateCopyLowestVotes = [...state];
      const postsSortedByLowestVotes = stateCopyLowestVotes.sort(
        (a, b) => a.timestamp - b.timestamp
      );
      return postsSortedByLowestVotes;

    case SORT_POSTS_BY_MOST_RECENT:
      const stateCopyRecent = [...state];
      const postsSortedByRecent = stateCopyRecent.sort(
        (a, b) => b.timestamp - a.timestamp
      );

      return postsSortedByRecent;

    case SORT_POSTS_BY_OLDEST:
      const stateCopyOldest = [...state];
      const postsSortedByOldest = stateCopyOldest.sort(
        (a, b) => a.timestamp - b.timestamp
      );

      return postsSortedByOldest;

    default:
      return state;
  }
}
