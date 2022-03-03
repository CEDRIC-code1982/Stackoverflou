import React from 'react';

import { Link } from 'react-router-dom';
//j'importe mon composant connecté 
import SettingsField from '../../components/SettingsField';


//! 1 Je vais passer par mon composant SettingsField qui contient la logique de l'input 
//! et après je vais vers le container SignUp  
import './styles.scss';

const SignUp = ({
    handleFormSubmit
}) => (
    <div className='signup-page'>
        <h2>Créer votre compte</h2>
        <form
            className="signup-page__form"
            onSubmit={handleFormSubmit}>

            <SettingsField
                stateKey="firstName"
                type="text"
                placeholder="Prénom"
            />

            <SettingsField
                stateKey="lastName"
                type="text"
                placeholder="Nom"
            />

            <SettingsField
                stateKey="nickName"
                type="text"
                placeholder="Surnom"
            />

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

export default SignUp;