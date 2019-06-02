import {CHAGNE_SEARCH_FIELD} from './constants';

const initialState = {
    searchField: ''
}

export const searchRobots = (state = initialState, action = {}) => {
    switch(action.type) {
        case CHAGNE_SEARCH_FIELD :
            return {...state, searchField: action.payload};
        default:
            return state;
    }
}