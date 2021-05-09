const GET_POST_DATA = 'GET_POST_DATA';

let initialState = {
    posts: []
}

let postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POST_DATA: 
            return {
                ...state,
                posts: action.postData
            }

        default: 
            return state
    }
}

//ActionCreators
export const getPostDataAC = (postData) => {
    return {type: GET_POST_DATA, postData: postData}
}



//Thunks
export const getPostTC = (postData) => {
    return (dispatch) => {
        dispatch(getPostDataAC(postData));
    }
}

export default postsReducer;