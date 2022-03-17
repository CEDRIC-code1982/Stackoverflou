import { combineReducers } from 'redux';

import signUpReducer from './signUp';
import signInReducer from './signIn';
import allTopicsReducer from './alltopics';

const rootReducer = combineReducers({

  signUp: signUpReducer,
  user: signInReducer,
  topics: allTopicsReducer,

});

export default rootReducer;