export const UPDATE = 'UPDATE_TITLE_OR_DESCRIPTION';

export const update = (field, text) => ({ type: UPDATE, field: field, text: text});