import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

import './styles.scss';

const SigninPage = ({
    email,
    password,
    changeField,
    handleLogin,
    handleLogout,
    isLogged,
    loggedMessage,
}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleLogin();
    };

    return (
        <div className='signIn'>
            <button
                className="button"
                type="button"
            >
                Signin
            </button>
            <div className="login-form">
                {isLogged && (
                    <div className="login-form-logged">
                        <p className="login-form-message">
                            {loggedMessage}
                        </p>
                        <button
                            type="button"
                            className="login-form-button"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                )}
                {!isLogged && (

                    <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
                        <Field
                            name="email"
                            placeholder="Adresse Email"
                            onChange={changeField}
                            value={email}
                        />
                        <Field
                            name="password"
                            type="password"
                            placeholder="Mot de passe"
                            onChange={changeField}
                            value={password}
                        />
                        <button
                            type="submit"
                            className="login-form-button"
                        >
                            OK
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

SigninPage.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeField: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired,
    isLogged: PropTypes.bool,
    loggedMessage: PropTypes.string,
};

SigninPage.defaultProps = {
    isLogged: false,
    loggedMessage: 'Connecté',
};

export default SigninPage;
