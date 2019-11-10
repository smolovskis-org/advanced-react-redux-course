import {CHANGE_AUTH, FETCH_COMMENT, SAVE_COMMENT} from 'actions/types';
import axios from 'axios';

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export function fetchComments() {
    const comments = axios.get('http://jsonplaceholder.typicode.com/comments');
    return {
        type: FETCH_COMMENT,
        payload: comments
    };
}

export function changeAuth(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}