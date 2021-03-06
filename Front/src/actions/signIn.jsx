export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const changeField = (newValue, name) => ({
    type: CHANGE_LOGIN_FIELD,
    newValue,
    name,
});

// appellée lorsque on envoie le form de login
export const submitLogin = () => ({
    type: SUBMIT_LOGIN,
});

// appellé lors du clic sur le bouton déconnexion
export const logout = () => ({
    type: LOGOUT,
});

export const loginSuccess = (name, token) => ({
    type: LOGIN_SUCCESS,
    name,
    token,
});
