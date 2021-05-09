import {createStore, combineReducers, applyMiddleware} from 'redux';
import friendsReducer from './reducers/friendsReducer';
import postsReducer from './reducers/postsReducer';

import thunk from 'redux-thunk';

let reducers = combineReducers({
    friendsData: friendsReducer,
    postsData: postsReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;