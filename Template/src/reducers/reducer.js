import { combineReducers } from "redux";

import { ADD_POST } from "../actions/add";
import { DELETE_POST } from "../actions/delete";
import { CHANGE_POST } from "../actions/change";


const initialState = [];

function addPosts(state = initialState, action) {
    switch(action.type) {
        case ADD_POST:
            return Object.assign({}, state, {
                payload: action.payload
            });
        default:
            return state;
    };
}

function deletePost(state = initialState, action) {
    switch(action.type) {
        case DELETE_POST:
            return Object.assign({}, state, {
                payload: action.payload
            });
        default:
            return state;
    };
}

function changePostreducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_POST: 
            return Object.assign({}, state, {
                payload: action.payload
            });
        default:
            return state;
    };
}

export default combineReducers({
    addPosts,
    deletePost,
    changePostreducer
})