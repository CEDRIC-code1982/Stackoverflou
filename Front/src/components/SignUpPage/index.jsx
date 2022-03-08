import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import Field from './Field';

import './styles.scss';

const SignUpPage = ({
    firstName,
    lastName,
    nickName,
    email,
    password,
    changeField,
    handleSignUp,
    signUp,
}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleSignUp();
    };

    const navigate = useNavigate();

    return (
        <div className='signUp'>
            <div className="signup-form">
                <h2>Créer votre compte</h2>
                <form autoComplete="off" className="signup-form-element" onSubmit={handleSubmit}>
                    <Field
                        name="firstName"
                        placeholder="Firstname"
                        onChange={changeField}
                        value={firstName}
                    />
                    <Field
                        name="lastName"
                        placeholder="Lastname"
                        onChange={changeField}
                        value={lastName}
                    />
                    <Field
                        name="nickName"
                        placeholder="Nickname"
                        onChange={changeField}
                        value={nickName}
                    />
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
                        className="signup-form-button"
                    >
                        Validation
                    </button>
                    
                    <Link to="/" className="backToHomeLink"><button>Annuler</button></Link>
                    {signUp && navigate("/")}
                </form>
                
            </div>
        </div>
    );
};

SignUpPage.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    nickName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeField: PropTypes.func.isRequired,
    handleSignUp: PropTypes.func.isRequired,
};

export default SignUpPage;