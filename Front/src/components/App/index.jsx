import React from 'react';

import NavBar from '../NavBar/index';
import Content from '../Content/index';
import Footer from '../Footer';

import './styles.scss';

const App = () => (
  <div className="App">
    <NavBar />
    <Content />
    <Footer />
  </div>
);


export default App;
