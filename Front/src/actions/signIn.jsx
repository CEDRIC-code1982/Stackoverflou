export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


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

