import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import { createStore, combineReducers } from "redux";

// action type
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';


// actions
const increment = (payload) => ({
    type: INCREMENT,
    payload,
});

const decrement = (payload) => ({
    type: DECREMENT,
    payload,
});

const counterReducer = (/* prev state*/ state=0, action) => {
    // processing
    switch (action) {
        case INCREMENT:
            return state + action.payload
        case DECREMENT:
            return state - action.payload
        default:
            return  state;
    }
    return 0; // next state
}

const historyReducer = (state = [], action) => {
    return {}
}

const store = createStore(combineReducers({
    count: counterReducer,
    history: historyReducer
}));

console.log('store ', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
