export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';


export function receiveCategories(categories) {
    return {
    TYPE: RECEIVE_CATEGORIES,
    categories
}
}

