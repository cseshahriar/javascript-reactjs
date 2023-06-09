import * as actionTypes from "./actionTypes";
import axios from "axios";
import {baseURL} from "./baseURL";
import dishes from "../data/dishes";

// addComment action
export const addComment = (dishId, rating, author, comment) => ({
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            author: author,
            rating: rating,
            comment: comment
        }
})

export const commentConcat = (comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: comment
})

export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING
})

export const loadComments = comments => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})

export const fetchComments = () => dispatch => {
    dispatch(commentLoading());

    axios.get(baseURL + 'comments')
        .then(response => response.data)
        .then(comments => dispatch(loadComments(comments)))
}

export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})
export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const dishesFailed = (errMess) => ({
    type: actionTypes.DISHES_FAILED,
    payload: errMess
})

export const fetchDishes = () => dispatch => {
    dispatch(dishesLoading())
    axios.get(`${baseURL}dishes`)
        .then(response => response.data)
        .then(
            dishes => dispatch(dishesLoading(dishes))
        )
}