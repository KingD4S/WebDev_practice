import { GET_POSTS_SUCCESS, GET_POSTS_FETCH, GET_POSTS_FAILURE  } from "./action";


const myFirstReducer = (state = {posts: [],loading:false, error: null}, action) => {
    
    switch (action.type) {  
        case GET_POSTS_FETCH:
            return { ...state, loading: true, error: null };
        case GET_POSTS_SUCCESS:
        
            return { ...state, posts: action.posts, loading: false };
        case GET_POSTS_FAILURE:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}

export default myFirstReducer;