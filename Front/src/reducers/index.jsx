import { combineReducers } from 'redux';

import settingsFieldReducer from './settingsField';
import signInReducer from './signIn';

const rootReducer = combineReducers({

  settings: settingsFieldReducer,
  user: signInReducer,

});

export default rootReducer;