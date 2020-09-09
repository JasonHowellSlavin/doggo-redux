import { UPDATE } from '../actions/CardActions';

const cardState = {
    title: 'Title goes here!',
    description: 'Description goes here!'
};

export default function counterReducer(state = cardState, action) {
    console.log('reducer', state, action);
    switch(action.type) {
        case UPDATE:
            return {
                [action.field]: action.text
            }
        default:
            return state;
    }
};