export const addPeople = data => ({
    type: 'SET_PEOPLE',
    data
});
export const setCurrentPage = data => ({
    type: 'SET_CURRENT_PAGE',
    data
});
export const prevCurrentPage = data => ({

    type: 'SET_PREV_PAGE',
    data
});
export const nextCurrentPage = data => ({
    type: 'SET_NEXT_PAGE',
    data
});