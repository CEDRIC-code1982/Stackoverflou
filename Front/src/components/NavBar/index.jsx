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
      <Link to="/" className="backToHome"><button>Home</button></Link>
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
        <div className='button'>
          <Link to="/signup" className="backToSignUp"><button>Sign Up</button></Link>
          <Link to="/signin" className="backToSignIn"><button>Sign In</button></Link>
        </div>
      )}
    </div>
  </div>
  );
};

export default NavBar;
