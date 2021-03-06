
/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';
import signup from './modules/User/UserReducers';
import search from './modules/Home/HomeReducers';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  signup,
  search
});
