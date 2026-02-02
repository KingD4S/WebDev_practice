export const GET_POSTS_FETCH = "GET_POSTS_FETCH";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const getPostsfetch  = () => ({
    type: GET_POSTS_FETCH
});

export const getPostsSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    posts
}); 

export const getPostsFailure = (error) => ({ 
    type: GET_POSTS_FAILURE,
    error
});