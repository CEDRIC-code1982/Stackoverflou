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
      <Link to="/" className="backToHome"><button className='button'>Home</button></Link>
    </div>
    <div className='connected'>
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
        <div className='buttons'>
          <Link to="/signup" className="backToSignUp"><button className='button'>Sign Up</button></Link>
          <Link to="/signin" className="backToSignIn"><button className='button'>Sign In</button></Link>
        </div>
      )}
    </div>
  </div>
  );
};

export default NavBar;
