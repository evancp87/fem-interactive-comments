/* eslint-disable no-case-declarations */
import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
  VOTE_COMMENT,
} from "../actions/commentsActions";

export default function comments(state = [], action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return {
        ...state,
        [action.id]: [...action.comments],
      };

    case ADD_COMMENT:
      return {
        ...state,
        [action.comment.parentId]: [
          state[action.comment.parentId],
          action.comment,
        ],
      };

    case REMOVE_COMMENT:
      const removedComment = state[action.parentId].filter((comment) => {
        return comment.id !== action.comment.id;
      });
      return {
        ...state,
        [action.comment.parentId]: removedComment,
      };

    case UPDATE_COMMENT:
      const updatedComment = state[action.comment.parentId]
        .filter((comment) => comment.id !== action.comment.id)
        .concat(action.comment);

      return {
        ...state,
        [action.comment.parentId]: [updatedComment],
      };

    case VOTE_COMMENT:
      const votedComment = state[action.comment.parentId]
        .filter((comment) => comment.id !== action.comment.id)
        .concat(action.comment);
      return {
        ...state,
        [action.comment.parentId]: votedComment,
      };

    default:
      return state;
  }
}
