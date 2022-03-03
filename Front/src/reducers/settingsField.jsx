import { CHANGE_SETTINGS_INPUT, SIGNUP_SUCCESS } from '../actions/settingsField';

//! state
export const initialState = {
    firstName: "",
    lastName: "",
    nickName: "",
    email: "",
    password: "",
    token: '',
};
//! récupération de l'action pour injecter dans le state 
//! direction index.js de mon reducer
const reducer = (state = initialState, action) => {
    // console.log('je suis dans le reducer settings');
    switch (action.type) {
        case CHANGE_SETTINGS_INPUT:

            return {
                ...state,
                [action.settingsKey]: action.newValue,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                token: action.token,
                firstName: '',
                lastName: '',
                nickName: '',
                email: '',
                password: '',
            };
        default:
            return state;
    }
};

export default reducer;
