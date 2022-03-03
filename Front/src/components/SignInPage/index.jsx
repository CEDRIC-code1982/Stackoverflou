import React from 'react';

import {Link} from 'react-router-dom';

import SettingsField from '../../containers/SettingsField';

import './styles.scss';

const SignIn = ({
    handleFormSubmit
}) => (

    <div className='signin-page'>
        <h2>Connexion</h2>
        <form
            className="signin-page__form"
            onSubmit={handleFormSubmit}>

            <SettingsField
                stateKey="email"
                type="email"
                placeholder="Email"
            />

            <SettingsField
                stateKey="password"
                type="password"
                placeholder="mot de passe"
            />

            <button className='settings__submit' type="submit">Valider</button>

            <Link to="/" className="backToHomeLink">Annuler</Link>
        </form>
    </div>

);

export default SignIn;
