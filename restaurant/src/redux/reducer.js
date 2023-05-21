import DISHES from '../data/dishes';
import COMMENTS from '../data/comments';

import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';


// state, action
const dishReducer = (dishState = DISHES, action) => {
    switch (action.type) {
        default:
            return dishState; // return dish data
    }
}

const commentReducer = (commentState = COMMENTS, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            console.log(comment);
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