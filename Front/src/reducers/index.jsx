import { combineReducers } from 'redux';

import signUpReducer from './signUp';
import signInReducer from './signIn';

const rootReducer = combineReducers({

  signUp: signUpReducer,
  user: signInReducer,

});

export default rootReducer;