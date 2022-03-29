import { CHANGE_LOGIN_FIELD, LOGIN_SUCCESS, LOGOUT } from '../actions/signIn';

export const initialState = {
    isLogged: false,
    email: '',
    password: '',
    user_id: '',
    name: null,
    token: '',
};

const reducer = (state = initialState, action = {}) => {
    //console.log('je suis dans le reducer Login');
    switch (action.type) {
        case CHANGE_LOGIN_FIELD:
            return {
                ...state,
                // je veux mettre dans la clé
                // qui s'apelle comme la variable action.name
                // la valeur de action.newValue
                [action.name]: action.newValue,
            };
        case LOGOUT:
            return {
                ...state,
                isLogged: false,
                name: null,
                token: '',
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                name: action.name,
                token: action.token,
                user_id: action.user_id,
                isLogged: true,
                email: '',
                password: '',
            };

        default:
            return state;
    }
};

export default reducer;
