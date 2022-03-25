import React from 'react';

import { Link } from 'react-router-dom';

import './styles.scss';

const NavBar = ({
  isLogged,
  loggedMessage,
  handleLogout,
}) => {
  return (
  <div className='navbar'>
    <div>
      <Link to="/" className="backToHome"><button className='button'>Accueil</button></Link>
    </div>
    <div className='connected'>
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <Link to="/" className="backToHome">
          <button
            type="button"
            className="button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
          </Link>
        </div>
      )}
      {!isLogged && (
        <div className='buttons'>
          <Link to="/signup" className="backToSignUp"><button className='button'>S'inscrire</button></Link>
          <Link to="/signin" className="backToSignIn"><button className='button'>Se connecter</button></Link>
        </div>
      )}
    </div>
  </div>
  );
};

export default NavBar;
