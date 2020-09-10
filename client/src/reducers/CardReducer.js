import { UPDATE } from '../actions/CardActions';

const cardState = {
    title: 'Title goes here!',
    description: 'Description goes here!'
};

export default function counterReducer(state = cardState, action) {
    console.log('reducer', state, action);
    switch(action.type) {
        case UPDATE:
            let newState = {...state};
            action.text !== '' ? newState[action.field] = action.text : newState[action.field] = newState[action.field];

            return {
                ...newState
            }
        default:
            return state;
    }
};