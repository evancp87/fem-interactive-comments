export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';


export function receiveComments(comments) {
    return {
    type: RECEIVE_COMMENTS,
    comments
}
}

export function addComment(comment) {
    return {
    type: ADD_COMMENT,
    comment
}
}

export function removeComments(comment) {
    return {
    type: REMOVE_COMMENT,
    comment: comment.id
}
}

export function updateComments(comment) {
    return {
    type: UPDATE_COMMENT,
    comment: comment.id
}
}

export function voteComment(comment) {
    return {
        type: VOTE_COMMENT,
        comment: comment.id
    }
}
