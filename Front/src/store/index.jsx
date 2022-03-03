import { createStore, applyMiddleware, compose } from 'redux';

// j'importe le reducer la logique du store : une fonction qui chargera le state selon les actions
import reducer from '../reducers';

import signUpMiddleware from '../middlewares/signUpPage';
import signInMiddleware from '../middlewares/signInPage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(

        signUpMiddleware,
        signInMiddleware,

    ),
);
// création du store
const store = createStore(reducer, enhancers);
export { store };
export default store;