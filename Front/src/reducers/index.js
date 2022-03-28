import { combineReducers } from 'redux';

import signUpReducer from './signUp';
import signInReducer from './signIn';
import allTopicsReducer from './allTopics';
import oneTopicReducer from './oneTopic';
import addTopicReducer from './addTopics';

const rootReducer = combineReducers({

  signUp: signUpReducer,
  user: signInReducer,
  topics: allTopicsReducer,
  topic: oneTopicReducer,
  add: addTopicReducer,

});

export default rootReducer;