import React from 'react';

import { Link } from 'react-router-dom';

import './styles.scss';

const NavBar = () => (
  <div className='navbar'>
    <div>
      <Link to="/" className="backToHome"><button>Home</button></Link>
    </div>
    <div>
      <Link to="/signup" className="backToSignUp"><button>Sign Up</button></Link>
      <Link to="/signin" className="backToSignIn"><button>Sign In</button></Link>
      <button >Log Out</button>
    </div>
  </div>
);

export default NavBar;
