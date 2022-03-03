import axios from 'axios';

import { SUBMIT_SETTINGS, signupSuccess } from '../actions/settingsField';

const signupMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SUBMIT_SETTINGS: {
            const state = store.getState();
            axios.post('http://localhost:9000/api/user/login', {
                "firstName": state.signUp.name,
                "lastName": state.signUp.name,
                "nickName": state.signUp.name,
                "email": state.signUp.email,
                "password": state.signUp.password,
            })
                .then((response) => {
                    console.log('je suis la réponse de registrer', response.data);
                    store.dispatch(signupSuccess(response.data))
                })
                .catch((error) => console.log(error))
            break;
        }
        default:
            next(action);
    }
}


export default signupMiddleware;