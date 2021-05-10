import {FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.playload;
        case CREATE:
            return [...posts, action.playload];
        case UPDATE:
            return posts.map((post) => post._id === action.playload._id ? action.playload : post);
        case DELETE:
            return posts.filter((post) => post._id !== action.playload);
        default:
            return posts;
    }
}