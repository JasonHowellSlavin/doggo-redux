export const UPDATE = 'UPDATE';

export const update = (field, text) => ({ type: UPDATE, field: field, text: text});