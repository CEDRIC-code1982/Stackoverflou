import axios from 'axios';

import { SUBMIT_LOGIN, loginSuccess } from '../actions/signIn';

const signInMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SUBMIT_LOGIN: {
            // avec getstate on apporte le state dans le MW
            const state = store.getState();
            axios.post(`${process.env.REACT_APP_API_URL}/api/user/signin`, {
                "email": state.user.email,
                "password": state.user.password,
            })
                .then((response) => {
                    console.log(response);
                    const token = response.data.data.token;
                    const name = response.data.data.user.nickName;
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
