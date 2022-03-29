import React from 'react';
import { Routes, Route } from "react-router-dom";

import NavBar from '../../containers/NavBar/index';
import Home from '../Home/index';
import Footer from '../Footer/index';
import SignIn from '../../containers/SignInPage/index';
import SignUp from '../../containers/SignUpPage/index';
import AllTopics from '../../containers/AllTopics/index';
import OneTopic from '../../containers/OneTopic/index';
import AddTopic from '../../containers/AddTopic/index';
import UpdateTopic from '../UpdateTopic';

import RequireAuth from '../../helper/RequireAuth';

import './styles.scss';

const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={
        <RequireAuth withAuth={true}>
          <Home />
        </RequireAuth>
      } />
      <Route path="/signin" element={
        <RequireAuth withAuth={false}>
          <SignIn />
        </RequireAuth>
      } />
      <Route path="/signup" element={
        <RequireAuth withAuth={false}>
          <SignUp />
        </RequireAuth>
      } />
      <Route path="/alltopics" element={
        <RequireAuth withAuth={false}>
          <AllTopics />
        </RequireAuth>
      } />
      <Route path="/topic/:id" element={
        <RequireAuth withAuth={false}>
          <OneTopic />
        </RequireAuth>
      } />
      <Route path="/addtopic" element={
        <RequireAuth withAuth={false}>
          <AddTopic />
        </RequireAuth>
      } />
      <Route path="/updatetopic/:id" element={
        <RequireAuth withAuth={false}>
          <UpdateTopic />
        </RequireAuth>
      } />
    </Routes>
    <Footer />
  </div>
);


export default App;
