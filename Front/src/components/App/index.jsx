import React from 'react';
import { Routes, Route} from "react-router-dom";

import NavBar from '../../containers/NavBar/index';
import Home from '../Home/index';
import Footer from '../Footer/index';
import SignIn from '../../containers/SignInPage/index';
import SignUp from '../../containers/SignUpPage/index';

import './styles.scss';


const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    <Footer />
  </div>
);


export default App;
