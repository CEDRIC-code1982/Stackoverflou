import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Flip, toast } from 'react-toastify';//
import 'react-toastify/dist/ReactToastify.css'//

import Field from './Field';

import './styles.scss';

toast.configure()//

const SignInPage = ({
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

    const navigate = useNavigate();

    const notify = () => {
        toast.success('Welcome !', {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            //theme: 'colored',
            transition: Flip,
        })
    }
    return (
        <div className='signIn'>
            <div className="login-form">
                {/*{isLogged && (
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
                {!isLogged && (*/}
                    <h2>Connexion</h2>
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
                            className="button"
                            onClick={notify}
                        >
                            OK
                        </button>
                        <Link to="/" className="backToHomeLink"><button className='button'>Annuler</button></Link>
                    </form>
               {/*} )} */}
                {isLogged && navigate("/")}
            </div>
        </div>
    );
};

SignInPage.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeField: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired,
    isLogged: PropTypes.bool,
    loggedMessage: PropTypes.string,
};

SignInPage.defaultProps = {
    isLogged: false,
    loggedMessage: 'Connecté',
};

export default SignInPage;
