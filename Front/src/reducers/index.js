import { combineReducers } from 'redux';

import signUpReducer from './signUp';
import signInReducer from './signIn';
import allTopicsReducer from './allTopics';
import oneTopicReducer from './oneTopic';

const rootReducer = combineReducers({

  signUp: signUpReducer,
  user: signInReducer,
  topics: allTopicsReducer,
  topic: oneTopicReducer,

});

export default rootReducer;