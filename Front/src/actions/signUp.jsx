export const CHANGE_SIGNUP_FIELD = 'CHANGE_SIGNUP_FIELD';
export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';


export const changeField = (newValue, name) => ({
    type: CHANGE_SIGNUP_FIELD,
    newValue,
    name,
});

export const submitSignUp = () => ({
    type: SUBMIT_SIGNUP,
});

export const signupSuccess = (name, token) => ({
    type: SIGNUP_SUCCESS,
    name,
    token,
});
