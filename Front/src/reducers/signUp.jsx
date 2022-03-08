import { CHANGE_SIGNUP_FIELD, SIGNUP_SUCCESS } from '../actions/signUp';

export const initialState = {
    firstName: '',
    lastName: '',
    nickName: '',
    email: '',
    password: '',
    signUp: false,
};

const reducer = (state = initialState, action = {}) => {
    //console.log('je suis dans le reducer signUp');
    switch (action.type) {
        case CHANGE_SIGNUP_FIELD:
            return {
                ...state,
                [action.name]: action.newValue,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                firstName: '',
                lastName: '',
                nickName: '',
                email: '',
                password: '',
                signUp: true,
            };
        default:
            return state;
    }
};

export default reducer;