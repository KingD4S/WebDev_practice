import { call, put, takeEvery } from "redux-saga/effects";
import { GET_POSTS_FETCH, GET_POSTS_SUCCESS } from "../redux/action.js";

async function postsFetch() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

function* fetchPosts() {
    const posts = yield call(postsFetch);

    yield put({type: GET_POSTS_SUCCESS, posts: posts});
}

function* mySaga() {
    // console.log('Saga is running');
    yield takeEvery(GET_POSTS_FETCH, fetchPosts);
}

export default mySaga;