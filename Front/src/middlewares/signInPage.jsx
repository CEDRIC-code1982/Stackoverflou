import axios from 'axios';

import { SUBMIT_LOGIN, loginSuccess } from '../actions/signIn';

const signInMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SUBMIT_LOGIN: {
            // avec getstate on apporte le state dans le MW
            const state = store.getState();
            axios.post('http://localhost:9000/api/user/login', {
                "email": state.user.email,
                "password": state.user.password,
            })
                .then((response) => {
                    const { name, token } = response.data
                    store.dispatch(loginSuccess(name, token))
                })
                .catch((error) => console.log(error))
            break;
        }
        default:
            next(action);
    }
}


export default signInMiddleware;

