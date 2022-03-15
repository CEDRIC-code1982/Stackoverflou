import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Flip, toast } from 'react-toastify';//
import 'react-toastify/dist/ReactToastify.css'//

import Field from './Field';

import './styles.scss';

toast.configure()//

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

    const notify = () => {
        toast.success('Votre compte a bien été créer !', {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Flip,
        })
    }
    return (
        <div className='signUp'>
            <div className="signup-form">
                <h2>Créer votre compte</h2>
                <form autoComplete="off" className="signup-form-element" onSubmit={handleSubmit}>
                    <Field
                        name="firstName"
                        placeholder="Prénom"
                        onChange={changeField}
                        value={firstName}
                    />
                    <Field
                        name="lastName"
                        placeholder="Nom"
                        onChange={changeField}
                        value={lastName}
                    />
                    <Field
                        name="nickName"
                        placeholder="Pseudo"
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
                        className="button"
                        onClick={notify}
                    >
                        Validation
                    </button>
                    <Link to="/" className="backToHomeLink"><button className="button">Annuler</button></Link>
                    {signUp && navigate("/signin")}
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