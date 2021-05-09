import API from './../../api/api';

const GET_FRIENDS = 'GET_FRIENDS';
const GET_TOTAL_COUNT = 'GET_TOTAL_COUNT';
const CHANGE_PAGE = 'CHANGE_PAGE';
const SHOW_LOADING = 'SHOW_LOADING';

let initialState = {
    friendsList: [],
    totalCount: 50,
    count: 10,
    isLoading: true,
    currentPage: 1
}

let friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_FRIENDS: 
            return {
                ...state,
                friendsList: action.friends,
                isLoading: false
            }

        case CHANGE_PAGE: 
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SHOW_LOADING:
            return {
                ...state,
                isLoading: action.isShow
            }

        default: 
            return state
    }
}



//ACTION CREATORS
export const getFriendsAC = (friends) => {
    return {type: GET_FRIENDS, friends: friends.items}
}

export const changePageAC = (currentPage) => {
    return {type: CHANGE_PAGE, currentPage: currentPage}
}

export const showLoading = (isShow) => {
    return {type: SHOW_LOADING, isShow: isShow}
}



//THUNKS
export const getFriendsTC = (page, count) => {
    return (dispatch) => {
        dispatch(showLoading(true));
        API.getFriends(page, count).then(data => dispatch(getFriendsAC(data)));
    }
}

export default friendsReducer;