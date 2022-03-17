import axios from 'axios';

import { SUBMIT_SIGNUP, signupSuccess } from '../actions/signUp';

const signupMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SUBMIT_SIGNUP: {
            const state = store.getState();
            axios.post(`${process.env.REACT_APP_API_URL}/api/user/signup`, {
                "firstName": state.signUp.firstName,
                "lastName": state.signUp.lastName,
                "nickName": state.signUp.nickName,
                "email": state.signUp.email,
                "password": state.signUp.password,
            })
                .then((response) => {
                    console.log('je suis la réponse du middleware de signUp', response.data.result);
                    store.dispatch(signupSuccess(response.data.result))
                })
                .catch((error) => console.log(error))
            break;
        }
        default:
            next(action);
    }
}


export default signupMiddleware;