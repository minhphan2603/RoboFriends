import {CHAGNE_SEARCH_FIELD} from './constants';


export const setSearchField = (text) => {
    return {
        type: CHAGNE_SEARCH_FIELD,
        payload: text
    }
}