import DISHES from '../data/dishes';
import COMMENTS from '../data/comments';

import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';


// state, action
const dishReducer = (
    dishState = { isLoading: false, dishes: [], errMess: null }, action
) => {
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                errMess: null,
                dishes: []
            }
        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                errMess: null,
                dishes: action.payload
            }
        case actionTypes.DISHES_FAILED:
            return {
                ...dishState,
                isLoading: false,
                errMess: action.payload,
                dishes: []
            }
        default:
            return dishState;
    }
}


const commentReducer = (commentState = COMMENTS, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            return commentState.concat(comment);

        default:
            return commentState;
    }


}

// multiple reducer
export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
});